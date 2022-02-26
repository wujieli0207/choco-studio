import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Toast } from "vant";
import { formatJsonToUrlParams, instanceObject } from "/@/utils/format";
import showStatusMessage from "./status";

const BASE_PREFIX = import.meta.env.BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  // TODO 具体请求前处理逻辑按需添加，目前暂无
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response;
    }
    Toast.success(JSON.stringify(response.status));
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      Toast.fail(showStatusMessage(response.status));
      return Promise.reject(response.data);
    }
    Toast("网络连接异常，请稍后再试");
    return Promise.reject(error);
  }
);

const service = {
  get: (url: string, data?: object) => {
    axiosInstance.get(url, { params: data });
  },
  post: (url: string, data?: object) => {
    axiosInstance.post(url, data);
  },
  put: (url: string, data?: object) => {
    axiosInstance.put(url, data);
  },
  delete: (url: string, data?: object) => {
    axiosInstance.delete(url, data);
  },
  upload: (url: string, file: File) => {
    axiosInstance.post(url, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  download: (url: string, data: instanceObject) => {
    const downloadUrl = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
    window.location.href = downloadUrl;
  },
};

export default service;
