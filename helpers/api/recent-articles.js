import APIRequest from "./api";

export async function fetchRecentArticles(limit,page=1) {
    let articles = null;
    try {
        const response = await APIRequest.post('recent-articles',{ limit,page });
         articles = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            articles = null
        } else {

            console.error(error);
        }
    }
    return articles;
}