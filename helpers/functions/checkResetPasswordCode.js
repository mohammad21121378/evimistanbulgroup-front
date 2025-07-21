import APIRequest from "../api/api";

export default async function checkResetPasswordCode(email,code,setIsSend,setShowPassword,setErrorCode){
    try {
        const response = await APIRequest.post('reset-password-check-code', { email,code });
        let valid= await response.valid
        let valid2= await response.data.valid

        if(valid2){
            if(setIsSend){
                setIsSend(false)
                setShowPassword(true)
            }

        } else{
            if(setErrorCode){
                setErrorCode("5 haneli kod yanlış")
            }

        }

        return valid2;
    } catch (error) {
        console.error('Error checking code existence:', error);
        return false;
    }
}