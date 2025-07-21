import APIRequest from "./../api";
import getAuthToken from "../functions/getAuthToken";

export async function fetchUpdateOrganProfile(data,dispatch) {
    let user = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('update-organ-profile',{
            ...data,

        }, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
            );
        user = await response.data;
        user=user.data
        if(user){
            dispatch({ type: 'LOGIN',user:user });
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            user = null
        } else {
        }
    }
    return user;

}