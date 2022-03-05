import { defHttp } from "/@/utils/http/axios";

enum Api {
  APPOINT_LIST = "/appoint/findAll",
  APPOINT_DETAIL = "/appoint/findOne",
}

export const getAppointList = () => {
  return defHttp.get({ url: Api.APPOINT_LIST });
};

export const getAppointDetail = (appointId: number) => {
  return defHttp.get({ url: `${Api.APPOINT_DETAIL}/${appointId}` });
};
