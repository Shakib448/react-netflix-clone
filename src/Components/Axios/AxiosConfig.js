import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
 
// intance.get('/foo-bar')
// axios.get('https://api.themoviedb.org/3/foo-bar')

export default instance;