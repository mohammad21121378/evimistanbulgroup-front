import Cookies from "js-cookie";
import APIRequest from "@/helpers/api";

export async function  resetChangePassword( email,password,router,locale) {
    try {
        const response = await APIRequest.post('reset-password-update', { email, password});
        const data = response.data;
        router.push(`https://facultyfind.com/${locale}/login`);
    } catch (error) {

        // پردازش خطا و ارسال به Redux

    }
}