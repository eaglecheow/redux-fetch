export const WEB_CONFIG = {
    baseAddress: "https://jsonplaceholder.typicode.com/",
    methods: {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        DELETE: "DELETE"
    }
};

export const setupClient = async(httpMethod, requestBody = null) => {

    //Some async function here

    return {
        method: httpMethod,
        body: requestBody && JSON.stringify(requestBody)
    };
};
