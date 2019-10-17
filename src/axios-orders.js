import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5aa08.firebaseio.com/'
});

export default instance;