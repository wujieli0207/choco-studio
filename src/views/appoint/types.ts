export interface AppointDetail {
  appointId: number;
  appointTitle: string;
  appointImg: string;
  appointDesc: string;
  appointAmt: number;
  appointStartTime: Date;
  appointEndTime: Date;
}

export interface AppointDateReturn {
  date: string;
  weekDay: string;
  fullDate: string;
}
