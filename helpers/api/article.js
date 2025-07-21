import APIRequest from "./api";

export async function fetchArticle(slug) {
    let article = null;
    try {
        const response = await APIRequest.post('article',{ slug: slug });
        article = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            article = null
        } else {

            console.error(error);
        }
    }
    console.log(article)
    return article;

}