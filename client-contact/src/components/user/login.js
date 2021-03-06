import React from 'react'
import axios from 'axios'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }
    
    handleSubmit(e){
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3007/users/login', formData)
             .then(response => {
                 if(response.data.errors){
                     alert(response.data.errors)
                 }else{
                     const token = response.data.token
                     localStorage.setItem('userAuthToken', token)
                     this.props.history.push('/users/account')
                 }
             })
    }

    render(){
        return(
            <div>
                <h2><b>LOGIN</b></h2><br/>
                <form onSubmit={this.handleSubmit}>
                        <div class="form-group">  
                            <label for="exampleInputEmail1">
                                email
                                <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                            </label><br/>
                        </div><br/>   
                        <div class="form-group">                          
                            <label  for="exampleInputPassword1">                                
                                password
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </label><br/>
                        </div><br/>   

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Login