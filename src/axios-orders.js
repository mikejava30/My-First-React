import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-a0b5e.firebaseio.com/'
});

export default instance;
