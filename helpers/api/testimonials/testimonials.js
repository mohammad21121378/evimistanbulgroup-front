import APIRequest from "../api";

export default async function fetchTestimonials(limit,items=0,language="en") {
    let testimonials = null;
    try {
        const response = await APIRequest.post('testimonials',{ limit,items,language });
        testimonials = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            testimonials = null
        } else {

            console.error(error);
        }
    }
    return testimonials;
}