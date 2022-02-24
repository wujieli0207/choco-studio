/**
 *
 * @param day 示例：0 当前日期、7 7天后日期、-3 3天前日期
 * @description 获取当前年月日，yyyy-mm-dd
 */
export function getCurrentDate(day: number): string {
  const ONE_DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

  const today = new Date();
  const targetDayMilliseconds = today.getTime() + ONE_DAY_MILLISECONDS * day;
  today.setTime(targetDayMilliseconds);

  const year = today.getFullYear();
  const month = handleDateZero(today.getMonth() + 1);
  const date = handleDateZero(today.getDate());

  return `${year}-${month}-${date}`;
}

/**
 *
 * @param date 月份或者日
 * @description 月份或者日如果为一位，则前面补一个0
 */
function handleDateZero(date: string | number): string {
  if (typeof date === "number") {
    date = date.toString();
  }

  if (date.length === 1) {
    return `0${date}`;
  }

  return date;
}
