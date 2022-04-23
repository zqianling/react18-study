import React from "react";
import { login } from "/src/services";
import { wrapPromise } from "../../utils";
const myLogin = login();
const loginRes = wrapPromise(myLogin);
export default function Home() {
  const logins = loginRes.read();
  return (
    <div>
      <h1>欢迎访问主页</h1>
      返回结果：{logins.success ? "成功" : "失败"}， 请求返回信息:{" "}
      {logins.message}
    </div>
  );
}
