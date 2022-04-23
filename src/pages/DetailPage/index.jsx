import React from "react";
import { login } from "/src/services";
import { wrapPromise } from "../../utils";
const myLoginDetail = login({us: '123', ps: '223'});
const loginRes = wrapPromise(myLoginDetail);
export default function Home() {
  const logins = loginRes.read();
  return (
    <div>
      欢迎访问详情页 <br />
      返回结果：{logins.success ? "成功" : "失败"}， 请求返回信息:{" "}
      {logins.message}
    </div>
  );
}
