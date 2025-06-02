const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function predictEmotion(imageData) {
    if (!API_URL) {
        throw new Error('API URL is not configured');
    }
    
    const formData = new FormData();
    formData.append('image', imageData);
    
    return fetch(API_URL + '/predict/', {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            console.log('API URL:', API_URL);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            return data; 
        })
        .catch((error) => {
            console.error("Error during prediction:", error);
            throw error;
        });
}
