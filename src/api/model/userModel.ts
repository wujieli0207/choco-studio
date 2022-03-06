export interface UserInfo {
  userId: number;
  userName: string;
  userNickName: string;
  userAvatar: string;
  mobile: string;
  openId: string;
}

export interface UserAppoint {
  relationId: number;
  userId: number;
  appointId: number;
  appointTitle: string;
  appointDate: Date | string;
  startTime: Date | string;
  endTime: Date | string;
  appointRemark: string;
}
