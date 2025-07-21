import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function sendChangeMobileCode(user_mobile,new_mobile) {
    let send = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('change-mobile-send-mobile',{ user_mobile,new_mobile },{
            headers: {
                Authorization: `${token}`,
            }
        });
        send = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            send = null
        } else {

            console.error(error);
        }
    }

    return send;

}