import { APP_ROUTES } from "../constants/routes.const";

// --- POST ---
const postRequest = async (url, body = {}) => {
  const config = {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }

  return await request(url, config);
}
// ------

// --- GET ---
const getRequest = async (url) => {
  const config = {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }

  return await request(url, config);
}
// ------

// --- Base request ---
const request = async (url, config) => {
  let result = [];
  let error = null;
  let status = -1;

  try {
    const response = await fetch(`${APP_ROUTES.API_URL}${url}`, config);
    status = response.status;
    result = await response.json();
    if (status >= 400) throw new Error(`Error ${status}: ${result?.message}`);
  }
  catch (err) {
    error = err.message;
  }
  finally {
    return { result, error, status };
  }
}

export { getRequest, postRequest };