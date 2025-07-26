import APIRequest from "./api";

export async function fetchArticle(slug,language="en") {
    let article = null;
    try {
        const response = await APIRequest.post('article',{ slug: slug,language:language });
        article = await response.data.data;

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