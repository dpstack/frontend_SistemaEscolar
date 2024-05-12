import { LOGIN, LOGOUT } from './actions';

export const login = userData => {
    return {
        type: LOGIN,
        payload: {
            user: userData
        }
    };
};

export const register = (userData) => {
    return {
        type: REGISTER,
        payload: {
            user: userData
        }
    };
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({
            type: LOGOUT
        });
    }
};