import APIRequest from "../api";

export async function sendResetPasswordCode(email) {
    let send = null;
    try {
        const response = await APIRequest.post('reset-password-send-email',{ email });
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