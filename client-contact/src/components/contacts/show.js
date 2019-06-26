import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ContactShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact: {}
        }
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3007/contacts/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }})
             .then(response => {
                 this.setState(() => ({
                     contact: response.data
                 }))
        })
    }
    //handle remove

    handleRemove(e){
        const id = this.props.match.params.id
        const confirmRemove = window.confirm("are you sure?")

        if(confirmRemove){
            axios.delete(`http://localhost:3007/contacts/${id}`,{
                headers:{
                    'x-auth': localStorage.getItem('userAuthToken')
                }}) 
                 .then(() => {
                     this.props.history.push('/contacts')
                 })
        }
    }

    render(){
        return(
            <div>
                <h2>{this.state.contact.name}</h2>
                <p>{this.state.contact.phoneNo}</p>
                <p>{this.state.contact.email}</p>

                <Link to="/contacts">back</Link> <br/>

                <Link to={`/contacts/edit/${this.props.match.params.id}`}>Edit</Link><br/>
                
                <button onClick={this.handleRemove}>
                    delete
                </button>
            </div>
        )
    }
}

export default ContactShow