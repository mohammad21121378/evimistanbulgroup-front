import APIRequest from "../api";

export default async function fetchProperty(slug,language="en") {
    let property = {};
    try {
        const response = await APIRequest.post('property',{ slug: slug,language });
        property = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            property = {}
        } else {

            console.error(error);
        }
    }
    return property;

}