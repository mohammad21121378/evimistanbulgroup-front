import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function sendChangeEmailCode(user_email,new_email) {
    let send = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('change-email-send-email',{ user_email,new_email },{
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