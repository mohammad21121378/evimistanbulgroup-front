import APIRequest from "./api";

export async function fetchPageContent(slug) {
    let category = null;
    try {
        const response = await APIRequest.post('page-content' , {slug:slug});
         category = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
             category = null
        } else {

            console.error(error);
        }
    }
    return category;




}