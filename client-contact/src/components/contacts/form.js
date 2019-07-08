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
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleInputUser1">
                                name
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} class="form-control" id="exampleInputUser1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                            </label><br/>
                        </div>  
                        <div class="form-group">                          
                            <label  for="exampleInputPhone1">                                
                                phone_number
                                <input type="text" name="phoneNo" value={this.state.phoneNo} onChange={this.handleChange} class="form-control" id="exampleInputPhone1" placeholder="PhoneNo" />
                            </label><br/>
                        </div>  
                        <div class="form-group">  
                            <label for="exampleInputEmail1">
                                email
                                <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                            </label><br/>
                        </div>    
                        <input type="submit" value="submit" />
                       
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default NotesForm

                        // <div>
                        //      <label for="exampleInputPhone1">
                        //         phone_number
                        //         <input type="text" value={this.state.phoneNo} name="phoneNo" onChange={this.handleChange} class="form-control" id="exampleInputPhone1" placeholder="Enter phoneNo"/>
                        //     </label><br/>
                        // </div><br/>    