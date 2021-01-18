export const getPosts = async () => {
    try {
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        );
        return data.json();
    } catch (error) {
        throw error.response;
    }
};

export const getCommentPost = async (id) => {
    try {
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        return data.json();
    } catch (error) {
        throw error.response;
    }
};
