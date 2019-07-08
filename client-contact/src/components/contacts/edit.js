import React from 'react'
import NotesForm from './form'
import axios from 'axios'
import {Link} from 'react-router-dom'


class ContactEdit extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            contact:{} 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(formData){
        axios.put(`http://localhost:3007/contacts/${this.state.contact._id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }})
             .then(response => {
                 if(response.data.hasOwnProperty('errors')){
                     console.log(response.data.errors)
                 }else{
                     this.props.history.push(`/contacts/${response.data._id}`)
                 }
             })
    }   

    render(){
        return(
            <div>
                <h2>Edit Note</h2>
                <NotesForm handleSubmit={this.handleSubmit} contact={this.state.contact} />
                <Link to="/contacts">back</Link> <br/>
            </div>
        )
    }
}

export default ContactEdit
