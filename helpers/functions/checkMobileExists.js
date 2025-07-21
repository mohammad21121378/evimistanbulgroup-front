import APIRequest from "../api/api";

export default async function checkMobileExists(mobile){
    try {
        const response = await APIRequest.post('check-mobile', { mobile });
        return response.data.exists; // مقدار بازگشتی از سرور که نشان دهنده وجود ایمیل است
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}