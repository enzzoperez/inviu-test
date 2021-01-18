export const getPosts = async () => {
    try {
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/posts/1/comments`
        );
        return data.json();
    } catch (error) {
        throw error.response;
    }
};
