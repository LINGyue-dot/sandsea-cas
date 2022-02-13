
export function deleteCookie(name: string, path: string = "/") {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`
}

// 获取 key value 对应的 cookie map
export function getCookieMap() {
  const map = new Map()
  const cookieStr = document.cookie
  cookieStr.split(';').forEach((it: string) => {
    const its = it.split("=")
    map.set(its[0], its[1])
  })
  return map
}

export function getCookie(name: string) {
  const map = getCookieMap()
  return map.get(name)
}

export function setCookie(cname: string, cvalue: string, exdays: number, path: string = "/") {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}