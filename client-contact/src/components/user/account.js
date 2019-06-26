import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../actions/user'

class Account extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:3007/users/account', {
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            const user = response.data
            this.props.dispatch(setUser(user))
            this.props.history.push('/contacts')
            //state user value changed.
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h3>User Account</h3>
                <p>{this.props.user.username}</p>
            </div>
        )
    }
}

//whenever we dispatch and call an action, user state value is changed and here the updated state value is passed as props again
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Account)

