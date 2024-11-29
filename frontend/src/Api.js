// api.js
export const callApi = async (route, data) => {
    try {
        const response = await fetch(`http://localhost:8010${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 400) {
                const errorDetails = await response.json(); 
                throw new Error(errorDetails.detail || "Bad Request");
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); 
    } catch (error) {
        throw new Error(error.message || 'Network error');
    }
};
