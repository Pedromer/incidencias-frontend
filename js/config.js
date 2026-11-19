// js/config.js
window.App = window.App || {};

const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

const API_BASE_URL = isLocal
  ? 'http://127.0.0.1:8000/api'
  : 'https://incidencias-backend-production-153c80c4.up.railway.app/api';

App.config = {
  apiBaseUrl: API_BASE_URL,
  tokenKey: 'incidencias_token',
  userKey: 'incidencias_user',
};