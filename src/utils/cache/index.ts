/**
 *
 * @param variable
 * @returns
 * @description 从 URL 获取参数
 */
export function getQueryVariable(variable: string): string {
  let url = decodeURI(window.location.href);
  let urlData = url.indexOf("?") !== -1 ? url.split("?")[1] : null;
  if (!urlData) {
    return "";
  }
  let paramsArr = urlData.split("&");
  for (let i = 0; i < paramsArr.length; i++) {
    const pair = paramsArr[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return "";
}
