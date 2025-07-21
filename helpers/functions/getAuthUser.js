import Cookies from 'js-cookie';

export default getAuthUser =>{
    return  Cookies.get('user')
};