import APIRequest from "./../api";
import getAuthToken from "../functions/getAuthToken";

export async function fetchUpdatePassword(data,setPasswordInCorrect,setShowFeedback,setModalResetOpen) {
    let user = null;
    const token = getAuthToken();
    try {
        const response = await APIRequest.post('update-password',{
                ...data,


            }, {
                headers: {
                    Authorization: `${token}`,
                }
            }
        );
        if(response.data.fail){
            setPasswordInCorrect(true)
        } else{
            setShowFeedback(true)
            setModalResetOpen(false)
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