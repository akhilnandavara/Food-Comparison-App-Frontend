import axios from 'axios';


export const apiConnector = (method, url, bodyData, header, params) => (
    axios.create({
        method: method,
        url: url,
        data: bodyData ? bodyData : null,
        headers: header ? header : null,
        params: params ? params : null,

    }))