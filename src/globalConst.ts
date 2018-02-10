var config = require('./configs.json');
const loggerDevice = require('./configs.json').logger_device;
const SMSTITLE = "凯歌";

if(loggerDevice == 'dev')
    exports.logger = require('tracer').colorConsole({level:'debug',methods : ['log', 'debug','info','error','errorwx']});
else if(loggerDevice == 'prod')
    exports.logger = require('tracer').dailyfile({root:'./logs', maxLogFiles: 100, allLogsFileName: 'tawl',level:'debug',methods : ['log', 'debug','info','error','errorwx']});
exports.CONSTS = {
    NUMBERPERPAGE : 10,
    TWL_100_KEY : "naocKXEm9888",
    TWL_100_CUSTOMER : "A625C3616C3C7F99F560BAEC108AF5FC",
    TWL_100_URL:"http://poll.kuaidi100.com/poll/query.do?customer={0}&sign={1}&param={2}",
    PARAMERR : {err:"Params is error!"},
    MASTERKEYLOSE : {err:"Id must be required!"},
    RESTAPINOTFOUND : {err:"No supported resources found!"},
    NOSUPPORTEVENT : {err:"No supported event found!"},
    INSERTSUCCESS : {info:"Insert is success!"},
    DELETESUCCESS : {info:"Delete is success!"},
    UPDATESUCCESS : {info:"Update is success!"},
    UPDATESTATUSERROR : {info:"Update resource status is error!"},
    TRSEXECERROR : {info:"trs error!"},
    UPLOADPICMAXWIDTH : 750,
    PT_REGIST_FANS: {info:"【"+SMSTITLE+"】您正在注册JBK APP，您的验证码是{0}，请于5分钟内完成注册。"},
    PT_LOGIN_FANS: {info:"【"+SMSTITLE+"】验证码{0}，您正在登录，十分钟内有效，请勿透漏给其他人"},
    PT_FORGET_PWD : {info:"【"+SMSTITLE+"】您的会员密码已改为{0},请登录后尽快修改"},
    PT_FORGET_PWD_CODE : {info:"【"+SMSTITLE+"】您的验证码为{0},十分钟内有效，请勿透漏给其他人"},
    PT_MSG_LOGIC:{info:"亲，您购买的宝贝（{0}）已经启程了，请您注意查收。点击查看完整的物流信息"},
    PT_GROUP_REMIND: {info:"【"+SMSTITLE+"】您关注的{0}将于{1}开始团购，记得到时抢购哦。"},
    RANKSPLIT : 30,
};
exports.OURCODES = {
    key_200:{code:200,msg:"操作成功"},
    key_204:{code:204,msg:"操作失败"},
    key_205:{code:205,msg:"非法操作"},
    key_206:{code:206,msg:"数据写入失败"},
    key_207:{code:207,msg:"禁止删除，有子元素"},
    key_208:{code:208,msg:"session错误"},

    key_300:{code:300,msg:"数据验证未通过"},
    key_301:{code:301,msg:"参数错误"},
    key_302:{code:302,msg:"非法输入"},
    key_303:{code:303,msg:"态状不正确"},
    key_304:{code:304,msg:"密码不合法"},
    key_305:{code:305,msg:"子应用ID必须输入"},
    key_307:{code:307,msg:"rank值不合法"},
    key_308:{code:308,msg:"帐户余额不足"},
    key_309:{code:309,msg:"库存不足"},

    key_601:{code:601,msg:"必须先登录"},
    key_602:{code:602,msg:"查询结果为空"},
    key_603:{code:603,msg:"超出范围"},
    key_604:{code:604,msg:"非法用户"},
    key_605:{code:605,msg:"密码错误"},
    key_606:{code:606,msg:"用户名不存在"},
    key_607:{code:607,msg:"验证码已失效"},
    key_608:{code:608,msg:"验证码不正确"},
    key_609:{code:609,msg:"验证码不存在"},
    key_610:{code:610,msg:"原密码不正确"},
    key_611:{code:611,msg:"数据已经存在"},
    key_612:{code:612,msg:"电话号码不正确"},
    key_613:{code:613,msg:"地址信息不存在"},
    key_614:{code:614,msg:"数据错误/不存在"},
    key_666:{code:666,msg:"系统升级中，请稍后再试！"},
}
exports.allowOrigin={
    orgin:'*'
}
exports.server_url={
    main_url:config.main_url
    // main_url:'http://192.168.0.10:3008'
}
exports.goodsAndTicket={
    goodsid:['dogs99adb850'],
    ticketid:[193]
}

exports.AppVersionInfo={
    content:'有新版本可供更新.\n 1.界面美化 \n 2.性能优化\n 3.最新版本',
    version:'0.0.2',
    downName:'taweilai_app0.0.2.apk',
    iosUrl:'http://itunes.apple.com/cn/app/id794862904',
    isForce:0,
    iosVersion:'0.0.3'

}

