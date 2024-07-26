// export const API_URL = 'http://127.0.0.1:8000/api';
// src/apiConfig.js
export const apiEndpoint = "REPLACE_WITH_API_ENDPOINT";
// src/apiConfig.js
export const API_URL = import.meta.env.VITE_API_ENDPOINT || 'http://127.0.0.1:8000/api';
