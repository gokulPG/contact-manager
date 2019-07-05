import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'


import ContactList from './components/contacts/list'
import ContactShow from './components/contacts/show'
import ContactNew from './components/contacts/new'
import ContactEdit from './components/contacts/edit'

import Register from  './components/user/register'
import Login from './components/user/login'
import Account from './components/user/account'
import Logout from './components/user/logout'


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <ul>
                    {!_.isEmpty(localStorage.getItem('userAuthToken')) ?
                        (<div>
                            <li><Link to='/users/account' >Account</Link></li>
                            <li><Link to='/users/logout'>Logout</Link></li>
                            <h2>My contact App</h2>
                            <Link to="/contacts">List Contacts</Link>
                        </div>) :
                        (<div>
                            <li><Link to='/users/register'>Register</Link></li>
                            <li><Link to='/users/login'>Login</Link></li>
                        </div>)}
                 </ul>
                        
                       
                     <Switch>
                              <Route path="/users/account" component={Account} exact={true} />
                              <Route path="/users/logout" component={Logout} />
                              <Route path="/users/register" component={Register} exact={true} />
                              <Route exact path="/users/login" component={Login} />
                              <Route path="/contacts" component={ContactList} exact={true} />
                               <Route path="/contacts/new" component={ContactNew} exact={true} />
                               <Route path="/contacts/edit/:id" component={ContactEdit} />
                               <Route path="/contacts/:id" component={ContactShow} />                            
                    </Switch>   

                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
export default connect(mapStateToProps)(App)


                            