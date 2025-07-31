import axios from 'axios';
import APIRequest from "../api/api";
import getAuthToken from "../functions/getAuthToken";
import Cookies from 'js-cookie';

export const login = (email, password,setErrors,setIsLoading, callback) => async (dispatch) => {
    try {
        setIsLoading(true)
        const response = await APIRequest.post('login', { email, password });
        const responseData = response.data;
        setIsLoading(false)
        if(responseData.fail){
            setErrors(responseData)
        } else{
            const { access_token, token_type,user } = responseData;
            const authToken = `${token_type} ${access_token}`;
            Cookies.set('token', authToken,{
                expires: 7,
                path: '/',
                
                secure: true,
                sameSite: 'Lax'
            })
            Cookies.set('user', user,{
                expires: 7,
                path: '/',
                
                secure: true,
                sameSite: 'Lax'
            })
            // ذخیره توکن در Redux
            dispatch({ type: 'LOGIN', payload: authToken,user:user });

            // فراخوانی callback
            callback();
        }




    } catch (error) {
        // پردازش خطا و ارسال به Redux
        setIsLoading(false)
        setErrors(error.response?.data.errors)
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
};

export const setToken = (authToken) => async (dispatch) => {
    if(authToken){
        dispatch({ type: 'LOGIN', payload: authToken });
    }
};

export const setAuthUser = (AuthUser) => async (dispatch) => {
    if(AuthUser){
        dispatch({ type: 'LOGIN', user: AuthUser });
    }
};

export const checkLoginStatus = () => async (dispatch) => {

    const token = getAuthToken(); // تابعی برای دریافت توکن از کوکی یا سایر روش‌ها
    if (token) {

        try {
            const response = await APIRequest.get('check-login-status', {
                headers: {
                    Authorization: `${token}`,
                },
            });
            if(response.message && response.message == "Unauthenticated."){

                Cookies.remove('token', {  path: '/' })
                dispatch({ type: 'LOGOUT' });
            } else{

                dispatch({ type: 'LOGIN', payload: token,user:response.data.data });
            }

        } catch (error) {
            Cookies.remove('token', {  path: '/' })
            dispatch({ type: 'LOGOUT' });
        }
    } else {
        Cookies.remove('token', {  path: '/' })
        dispatch({ type: 'LOGOUT' });
    }

};

export const logout = (callback) => async (dispatch) => {
    try {
        /*const token = getAuthToken();
        const response =await APIRequest.post('logout', {
            headers: {
                Authorization: `${token}`,
            },
        });*/

        Cookies.remove('token', {  path: '/' })
        dispatch({ type: 'LOGOUT' });
        callback()
    } catch (error) {
        const { data } = error.response;

        // پردازش خطا و ارسال به Redux
        dispatch({ type: 'LOGOUT_ERROR', payload: data.message });
    }
};

export const register = (email,password,code, callback) => async (dispatch) => {

    try {
        const response = await APIRequest.post('register-check-code', { email,password,code });
        const data = response.data;
        if(data.access_token){
            const { access_token, token_type,user } = data
            const authToken = `${token_type} ${access_token}`;
            Cookies.set('token', authToken,{
                expires: 7,
                path: '/',
                
                secure: true,
                sameSite: 'Lax'
            })
            Cookies.set('user', user,{
                expires: 7,
                path: '/',
                
                secure: true,
                sameSite: 'Lax'
            })
            // ذخیره توکن در Redux
            dispatch({ type: 'LOGIN', payload: authToken,user:user });
        } else{
            alert("کد تأیید نادرست است")
        }


        // فراخوانی callback
        callback();

    } catch (error) {
        console.error('Error checking code existence:', error);
        return false;
    }
};


export const  UpdateProfile =(data,setShowFeedback,setError,callback) => async (dispatch) => {
    let user = null;
    let failed = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('update-profile',{ ...data },{
            headers: {
                Authorization: `${token}`,
            },
        });
        failed= await response.data.failed
        user = await response.data.data;
        if(failed){

            setError(failed)
        }else if(user){
            user = await response.data.data;
            if(response.message && response.message === "Unauthenticated."){
                Cookies.remove('token', {  path: '/' })
                dispatch({ type: 'LOGOUT' });
            } else{
                setShowFeedback(true)
                dispatch({ type: 'LOGIN',user:user });
            }
            callback();
        }

    } catch (error) {

        if (error.response && error.response.status === 404) {
            user = null
        } else {

            console.error(error);
        }
    }
    return user;
}

export const  submitAuthorAndMedicalReviewer =(data,setIsLoading,callback) => async (dispatch) => {
    let user = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('submit-author-medical',{ ...data },{
            headers: {
                Authorization: `${token}`,
            },
        });
        user = await response.data.data;
        if(response.message && response.message === "Unauthenticated."){
            Cookies.remove('token', {  path: '/' })
            dispatch({ type: 'LOGOUT' });
        } else{
            dispatch({ type: 'LOGIN',user:user });
        }
        setIsLoading(false)
        callback();

    } catch (error) {
        setIsLoading(false)
        if (error.response && error.response.status === 404) {
            user = null
        } else {

            console.error(error);
        }
    }
    return user;

}