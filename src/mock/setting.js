import Mock from "mockjs";
import weijpg from "./weixinjpg.js"
import qqjpg from "./qqjpg.js"

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "http://www.duyiedu.com/source/img/logo.png",
    siteTitle: "我的个人空间",
    github: "https://github.com/MrYanQi2020",
    qq: "363203978",
    qqQrCode:weijpg,
    weixin: "363203978",
    weixinQrCode:qqjpg,
    mail: "mryanqi2019@163.com",
    icp: "欤ICP备17001719号",
    githubName: "Mryanqi",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
