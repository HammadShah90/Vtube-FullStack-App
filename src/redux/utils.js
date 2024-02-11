import axios from "axios";

async function CallApi(apiOptions) {
  let apiResponse = {};

  try {
    const config = {
      method: apiOptions.method,
      url: apiOptions.endpoint,
      headers: apiOptions.headers,
      data: apiOptions?.data,
    };
    console.log(config);

    const result = await axios(config);
    console.log(result);
    apiResponse = result;
  } catch (error) {
    console.log(error);
    const { status } = error.response;

    if (status === 401) {
      alert("Session Expired, Please login again. redirecting...");
      window.location.href = 'http://localhost:5173/signin';
    }
    apiResponse = error;
  }
  // console.log(apiResponse);
  return apiResponse;
}

const Utils = {
  CallApi,
};

export default Utils;
