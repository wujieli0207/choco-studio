import { MockMethod } from "vite-plugin-mock";
import { ResultEnum } from "/@/enums/httpEnum";

export default [
  {
    url: "/api/appoint/getAppointList",
    method: "get",
    response: ({}) => {
      return {
        code: ResultEnum.SUCCESS,
        result: {
          name: "wujieli",
        },
        message: "请求成功",
      };
    },
  },
] as MockMethod[];
