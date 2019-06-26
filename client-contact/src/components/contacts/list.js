import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

class ContactList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contacts:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3007/contacts', {
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }})
             .then(response => {
                this.setState(() => ({
                    contacts: response.data
                }))
             })
    }
    render(){
        return(
            <div>
                <h2>Lisitng Contacts - {this.state.contacts.length}</h2>
                <ul>
                {
                    this.state.contacts.map(contact => {
                        return <li key={contact._id}> <Link to={`/contacts/${contact._id}`}>{contact.name}</Link> </li>
                    })
                }
                </ul>

                <Link to='/contacts/new'>add new Contact</Link>
            </div>
         )
    }
}

export default ContactList
