// 登录
const url = "https://qianlingvip.cn/api/user/login";
export async function login(payload) {
  const params = { us: "324", ps: "12334", ...payload };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(params),
  });
  return response.json();
}
