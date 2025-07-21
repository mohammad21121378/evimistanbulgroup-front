import APIRequest from "./api";
import Cookies from "js-cookie";

export const registerCheckCodeMobile = (email,password,code, callback,setError) => async (dispatch) => {

    try {
        const response = await APIRequest.post('register-check-code-mobile', { email,password,code });
        const data = response.data;
        if(data.access_token){
            const { access_token, token_type,user } = data
            const authToken = `${token_type} ${access_token}`;
            Cookies.set('token', authToken,{
                expires: 7,
                path: '/',
                domain: '.facultyfind.com',
                secure: true,
                sameSite: 'Lax'
            })
            Cookies.set('user', user,{
                expires: 7,
                path: '/',
                domain: '.facultyfind.com',
                secure: true,
                sameSite: 'Lax'
            })
            // ذخیره توکن در Redux
            dispatch({ type: 'LOGIN', payload: authToken,user:user });
            callback();
        } else{
            setError(true)
        }


        // فراخوانی callback


    } catch (error) {
        console.error('Error checking code existence:', error);
        setError(true)
        return false;
    }
};

