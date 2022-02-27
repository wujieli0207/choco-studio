import { defHttp } from "/@/utils/http/axios";

enum Api {
  APPOINT_LIST = "/appoint/getAppointList",
}

export const getAppointList = () => {
  return defHttp.get({ url: Api.APPOINT_LIST });
};
