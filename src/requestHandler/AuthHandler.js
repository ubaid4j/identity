import axios from 'axios'

const AuthHandler = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key:`${process.env.REACT_APP_API_KEY}`,
        returnSecureToken: true
    }
})
export default AuthHandler;
