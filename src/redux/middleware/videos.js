import Utils from "../utils.js";

const getAllVideos = (type) => {
  // console.log("type", type);
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `/v1/videos/${type}`,
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

const getVideo = (videoId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiOptions = {
        endpoint: `/v1/users/find/${videoId}`,
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
}

const VideosAction = {
  getAllVideos,
  getVideo,
};

export default VideosAction;
