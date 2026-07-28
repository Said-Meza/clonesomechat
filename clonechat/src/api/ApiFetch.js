export const fetchApi = async (
    url,
    message = null,
    method = "GET"
) => {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    if (message) {
        options.body = JSON.stringify(message);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
};