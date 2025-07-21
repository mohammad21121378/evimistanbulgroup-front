import APIRequest from "../api/api";
import getAuthToken from "./getAuthToken";

export default async function checkChangeEmailCode(email,new_email,code,dispatch){
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('change-email-check-code', { email,code,new_email },{
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        let userResponse = await response.data;
        let user=userResponse.user

        if(user){
            dispatch({ type: 'LOGIN',user:user });
        }
        return response.data.valid;

    } catch (error) {
        console.error('Error checking code existence:', error);
        return false;
    }
}