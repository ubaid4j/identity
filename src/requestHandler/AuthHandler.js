import axios from 'axios'

const AuthHandler = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: 'AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw'
    }
})
export default AuthHandler;
