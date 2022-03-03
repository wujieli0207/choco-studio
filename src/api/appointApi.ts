import { defHttp } from "/@/utils/http/axios";

enum Api {
  APPOINT_LIST = "/api/appoint/findAll",
}

export const getAppointList = () => {
  return defHttp.get({ url: Api.APPOINT_LIST });
};
