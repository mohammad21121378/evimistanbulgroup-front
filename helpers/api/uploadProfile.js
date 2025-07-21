import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";
import Cookies from "js-cookie";

export async function uploadProfile(formData,dispatch) {
    let user = null;

    try {
        const token = getAuthToken();
        const response = await APIRequest.post('upload-profile',formData,{
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        user = await response.data.data;
        if(response.message && response.message === "Unauthenticated."){
            Cookies.remove('token')
            dispatch({ type: 'LOGOUT' });
        } else{
            dispatch({ type: 'LOGIN',user:user });
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