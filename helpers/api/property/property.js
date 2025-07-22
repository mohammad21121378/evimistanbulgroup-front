import APIRequest from "../api";

export default async function fetchProperty(slug) {
    let property = null;
    try {
        const response = await APIRequest.post('property',{ slug: slug });
        property = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            property = null
        } else {

            console.error(error);
        }
    }
    console.log(property)
    return property;

}