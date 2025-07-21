import APIRequest from "../api";

export default async function fetchProperties(limit,page=1,filters={}) {
    let properties = null;
    try {
        const response = await APIRequest.post('recent-properties',{ limit,page,...filters });
        properties = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            properties = null
        } else {

            console.error(error);
        }
    }
    return properties;
}