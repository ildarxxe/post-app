const API_URL = process.env.REACT_APP_API_URL;

const fetchData = async (endpoint, method = "GET", body = null, headers = {}) => {
    const url = API_URL + String(endpoint);
    const options = {
        method: method,
        headers: {
            ...headers
        },
        ...(body && method !== "GET" ? { body: body } : {})
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData?.message || `Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}

export default fetchData;