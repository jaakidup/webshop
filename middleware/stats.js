// this send user stat to a back end server for logging
// TODO: wrap it in try/catch for network failure!

import axios from 'axios';

//import axios from '@nuxtjs/axios';

export default function({route}) {
    return axios.post('http://localhost:3030/test', {
        url: route.fullPath
    })
}