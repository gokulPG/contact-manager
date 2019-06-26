import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import App from './App'
import { Provider } from 'react-redux'
import { setUser } from './actions/user'

import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe(() => {
    console.log('redux Store state', store.getState())
})

console.log(store.getState())

//user reloaded page
//localhost:3007/users/account

if(localStorage.getItem('userAuthToken')){
    axios.get('http:localhost:3007/users/account',{
        headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        store.dispatch(setUser(response.data))
    })
}
const provider = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(provider,document.getElementById('root'))
