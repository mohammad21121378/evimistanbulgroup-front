import APIRequest from "./api";
import Cookies from "js-cookie";

export async function  registerCheckCode( email, password,code,nextStep,setError) {
    try {
        const response = await APIRequest.post('register-check-code', { email, password,code});
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