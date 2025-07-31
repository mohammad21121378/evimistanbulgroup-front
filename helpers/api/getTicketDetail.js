import APIRequest from "./api";
import getAuthToken from "../functions/getAuthToken";
import { cookies } from "next/headers";

export async function fetchGetTicketDetail(id) {
    let ticket = null;
    const token = cookies().get("token")?.value;
    try {
        const response = await APIRequest.post('ticket-detail',{ id: id, }, {
            headers: {
                Authorization: `${token}`,
            }
        });
        ticket = await response.data;
        ticket=ticket.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            ticket = null
        } else {

            console.error(error);
        }
    }
    return ticket;

}