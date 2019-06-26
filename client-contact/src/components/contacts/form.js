import React from 'react'


class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
             name:'',
             phoneNo:'',
             email:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData ={
            name: this.state.name,
            phoneNo: this.state.phoneNo,
            email: this.state.email
        }
        this.props.handleSubmit(formData)
    }

    componentWillReceiveProps(nextProps){
        this.setState(() => ({
            name: nextProps.contact.name,
            phoneNo: nextProps.contact.phoneNo,
            email: nextProps.contact.email
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                     <label>
                         name
                         <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                     </label><br/>

                     <label>
                         phone_number
                         <input type="text" value={this.state.phoneNo} name="phoneNo" onChange={this.handleChange}/>
                     </label><br/>

                     <label>
                         email
                         <input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
                     </label><br/>

                     <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NotesForm