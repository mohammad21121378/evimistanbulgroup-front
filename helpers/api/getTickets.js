import APIRequest from "./api";
import { cookies } from "next/headers";
export async function fetchGetTicketDetail() {
    let ticket = null;
    const token = cookies().get("token")?.value;
    try {
        const response = await APIRequest.post('tickets',
            { user_id:1  },
            {
            headers: {
                Authorization: `${token}`,
            }
        });
        ticket = await response.data;
        console.log(response)
        ticket=ticket.data
    } catch (error) {
        if (error.response) {
            // پیام اختصاصی برگشتی از سرور
            console.log("Error message:", error.response.data?.message || error.response.data);
            console.log("Status code:", error.response.status);
        } else if (error.request) {
            // درخواست ارسال شده ولی پاسخی دریافت نشده
            console.log("No response received:", error.request);
        } else {
            // مشکلی قبل از ارسال درخواست (مثل ساختار اشتباه)
            console.log("Error setting up request:", error.message);
        }
    }


    return ticket;

}