import Utils from "../utils.js";
import { baseURL } from "../../config/constant.js";

const getAllVideos = (type) => {
  // console.log("type", type);
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/v1/videos/${type}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      if (apiResponse.status === 200) {
        resolve(apiResponse.data);
      } else {
        resolve(apiResponse.response.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getVideo = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/v1/videos/find/${path}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      if (apiResponse.status === 200) {
        resolve(apiResponse.data);
      } else {
        resolve(apiResponse.response.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getChannel = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `${baseURL}/v1/users/find/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      if (apiResponse.status === 200) {
        resolve(apiResponse.data);
      } else {
        resolve(apiResponse.response.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const UploadVideo = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(payload);
      const { desc, imgUrl, tags, title, videoUrl } = payload;
      const apiOptions = {
        endpoint: `${baseURL}/v1/videos`,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        data: {
          desc,
          imgUrl,
          tags,
          title,
          videoUrl,
        },
      };
      const apiResponse = await Utils.CallApi(apiOptions);
      if (apiResponse.status === 200) {
        resolve(apiResponse.data);
      } else {
        resolve(apiResponse.response.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const VideosAction = {
  getAllVideos,
  getVideo,
  getChannel,
  UploadVideo,
};

export default VideosAction;
