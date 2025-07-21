import APIRequest from "./api";

export async function fetchParentCatList() {
    let categories = null;
    try {
        const response = await APIRequest.post('recent-articles');
         categories = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            categories = null
        } else {

            console.error(error);
        }
    }
    return categories;

}