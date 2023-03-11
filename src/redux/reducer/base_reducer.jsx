import {CACHE_LOGIN_INFO,delete_LOGIN_INFO} from 'common/const/redux_const'

var data = {
    currentUser: {}
}
export default function reducer(state = data, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CACHE_LOGIN_INFO:
            for (const key in action.user) {
                newState.currentUser[key] = action.user[key];
            }
            return newState;
        case delete_LOGIN_INFO:
            newState.currentUser = {}
            return newState;
        default:
            return newState;
    }
}

