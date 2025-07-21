import APIRequest from "./api";

export async function fetchCategory() {
    let categories = null;
    try {
        const response = await APIRequest.post('category-with-articles');
         categories = await response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            categories = null
        } else {

            console.error(error);
        }
    }
    return categories;
}