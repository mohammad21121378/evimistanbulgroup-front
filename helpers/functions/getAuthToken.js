import Cookies from 'js-cookie';

export default getAuthToken =>{
    return  Cookies.get('token')
};