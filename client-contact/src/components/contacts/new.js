import React from 'react'
import axios from 'axios'
import NotesForm from './form'


class ContactNew extends React.Component{
     constructor(props){
         super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
     }


     handleSubmit(formData){
        axios.post('http://localhost:3007/contacts',formData,{
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
                 <h2>New Contact</h2>
                 <NotesForm handleSubmit={this.handleSubmit}/>
                
             </div>
         )
     }
}

export default ContactNew