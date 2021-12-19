import axios from 'axios';


export default axios.create({
    baseURL: 'https://storage.googleapis.com',
    params: {
        type: 'row',
    }

});