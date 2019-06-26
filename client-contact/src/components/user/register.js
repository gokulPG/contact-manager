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
                <h2>REGISTER</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </label><br/>
                    <label><br/>
                        email
                        <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} />
                    </label><br/>
                    <label>
                        password
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Register