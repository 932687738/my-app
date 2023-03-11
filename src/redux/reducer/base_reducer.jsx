import { CACHE_LOGIN_INFO, DELETE_LOGIN_INFO,GET_LOGIN_INFO } from 'common/const/redux_const'
import { CURRENT_USER } from 'common/const/bas_const'

var data = {
    currentUser: {}
}
export default function reducer(state = data, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CACHE_LOGIN_INFO:
            sessionStorage.setItem(CURRENT_USER, JSON.stringify(action.data))
            newState.currentUser = action.data.object
            console.log(newState)
            return newState;
        case DELETE_LOGIN_INFO:
            newState.currentUser = {}
            return newState;
        default:
            return newState;
    }
}

