import React from 'react'
import axios from 'axios'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:3007/users/register', formData)
             .then(response => {
                 if(response.data.errors){
                     alert(response.data.errors)
                 }else{
                     this.props.history.push('/users/login')
                 }
             })
    }


    render(){
        return(
            <div>
                <h4><b>REGISTER</b></h4><br/>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleInputUser1">
                                username
                                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} class="form-control" id="exampleInputUser1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                            </label><br/>
                        </div>  
                        <div class="form-group">  
                            <label for="exampleInputEmail1">
                                email
                                <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                            </label><br/>
                        </div>   
                        <div class="form-group">                          
                            <label  for="exampleInputPassword1">                                
                                password
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </label><br/>
                        </div>   
                            <input type="submit" value="submit" />
                       
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Register