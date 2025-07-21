import APIRequest from "./api";
import getAuthToken from "../../helpers/functions/getAuthToken";

export async function sendResetPasswordEmail(email,setIsSend,setBtnText,setIsLoading) {
    let send = null;
    try {
        const token = getAuthToken();
        const response = await APIRequest.post('reset-password-send-email',{ email },{
            headers: {
                Authorization: `${token}`,
            }
        });
        send = await response.data;


            setIsSend(true)
            setIsLoading(false)
            setBtnText("Şifre güncelleme")

    } catch (error) {
        if (error.response && error.response.status === 404) {
            send = null
        } else {

            console.error(error);
        }
    }

    return send;

}