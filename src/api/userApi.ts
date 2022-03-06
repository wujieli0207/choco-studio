import { UserAppoint, UserInfo } from "./model/userModel";
import { defHttp } from "/@/utils/http/axios";

enum Api {
  USER_INFO = "/user/findOne",
  USER_APPOINT = "/user/findUserAppoint",
}

/**
 *
 * @description 获取用户基础信息
 */
export const getUserInfo = (userId: number) => {
  return defHttp.get<UserInfo>({ url: `${Api.USER_INFO}/${userId}` });
};

/**
 *
 * @description 获取用户预约的内容信息
 */
export const getUserAppoint = (userId: number) => {
  return defHttp.get<UserAppoint[]>({ url: `${Api.USER_APPOINT}/${userId}` });
};
