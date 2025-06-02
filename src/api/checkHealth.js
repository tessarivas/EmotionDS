const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function checkHealth() {
    if (!API_URL) {
        throw new Error('API URL is not configured');
    }

    return fetch(API_URL + '/health/', {
        method: "GET",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            return data; // Assuming the API returns a JSON object with health status
        })
        .catch((error) => {
            console.error("Error checking health:", error);
            throw error;
        });
}