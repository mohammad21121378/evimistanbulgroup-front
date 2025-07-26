import APIRequest from "./api";

export async function fetchCategoryDetail(slug,limit=-1,page=1,language="en") {
    let category = null;
    try {
        const response = await APIRequest.post('category-detail' , {slug,limit,page,language});
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