import axios from 'axios';

// Create an instance of Axios with custom configuration
const instance = axios.create({
    baseURL: 'http://localhost:8080', // Replace this with the base URL of your server
    timeout: 5000, // Set timeout to 5 seconds
    headers: {
        'Content-Type': 'application/json', // Set default content type
    },
});

// Add a request interceptor to include authorization token in outgoing requests
instance.interceptors.request.use(
    (config) => {
        const token = getTokenFromHeaders(); // Function to retrieve token from request headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Function to retrieve access token from request headers
const getTokenFromHeaders = () => {
    // Logic to retrieve the access token from request headers
    // For example, if the token is stored in a header named 'Authorization':
    const authHeader = window.localStorage.getItem('authorization');
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        return token;
    }
    return null;
};

// Export the Axios instance
export default instance;
