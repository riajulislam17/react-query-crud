import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosRequester = async ({ ...options }) => {
  const onSuccess = (res) => {
    return res.data;
  };
  const onError = (err) => {
    throw err.response;
  };

  return axios(options).then(onSuccess).catch(onError);
};

export default axiosRequester;
