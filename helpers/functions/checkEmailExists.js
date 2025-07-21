import APIRequest from "../api/api";

export default async function checkEmailExists(email){
    try {
        const response = await APIRequest.post('check-email', { email });
        return response.data.exists; // مقدار بازگشتی از سرور که نشان دهنده وجود ایمیل است
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}