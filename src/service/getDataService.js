// import axios from '../config/axios';
import axios from '../axios.js';


export const getListItemShop = () => {
    return axios.get('/api/shop/All');
}
