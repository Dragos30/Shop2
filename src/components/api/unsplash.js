import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization:
    'Client-ID b921e504f4480b319723a80c3db235b61192584c4d168649dbc14dfc7267f9be'
    }
});