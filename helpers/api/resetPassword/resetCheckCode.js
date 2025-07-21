import Cookies from "js-cookie";
import APIRequest from "@/helpers/api";

export async function  resetCheckCode( email,code,nextStep,setError) {
    try {
        const response = await APIRequest.post('reset-password-check-code', { email,code});
        const data = response.data;
        if(data.success){
            nextStep()
        } else{
            setError(true)

        }
    } catch (error) {
        setError(true)
        // پردازش خطا و ارسال به Redux

    }
}