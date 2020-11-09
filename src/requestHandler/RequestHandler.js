import axios from 'axios'
const RequestResolver = axios.create({
   baseURL: "https://react-demo-45a1b.firebaseio.com/",
});

export default RequestResolver;
