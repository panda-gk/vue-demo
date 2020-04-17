import { Message } from 'element-ui';
export  const reg = {
  Email: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, //邮箱
  Account: /^[a-zA-Z0-9_]{2,20}$/, // 账户
  Pwd: /^[a-zA-Z0-9_~!@#$%^&*()]{6,25}$/i, // 密码
  Tel: /^(13|14|15|16|18|17|19)[0-9]{9}$/, //手机
  FixedAndTel: /(^0\d{2,3}-\d{7,8}$)|(^1[3|4|5|6|7|8][0-9]{9}$)/, //座机或手机号
  IDCard: /^\d{17}[\d|X|x]|\d{15}$/, //身份证 
  Number: /^\d+$/, //数字
  IntegerNumber: /^[1-9]\d*(\.\d+)?$/,//大于0必须输入合同金额(数字)!")
  Integer: /^[-\+]?\d+$/, //正负整数
  IntegerZ: /^[1-9]\d*$/, //正整数 
  IntegerF: /^-[1-9]\d*$/, //负整数
  Chinese: /^[\u0391-\uFFE5]+$/,
  Zipcode: /^\d{6}$/, //邮编
  Authcode: /^\d{6}$/, //验证码
  QQ: /^\d{4,12}$/, // QQ
  Price: /^(0|[1-9]\d*)(\.\d{1,2})?$/, // 价格
  Money: /^(0|[1-9]\d*)(\.\d{1,4})?$/, // 金额
  Letter: /^[A-Za-z]+$/, //字母
  LetterU: /^[A-Z]+$/, //大写字母
  LetterL: /^[a-z]+$/, //小写字母
  Url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, // URL
  Date: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/, //日期
  Domain: /^[a-zA-Z0-9]{4,}$/ //自定义域名
}

// 验证 
export function check(params) {
  var flag =false;
  for(var i=0;i<params.length;i++){
    let el =params[i];
    if (el.num && !/^[1-9]\d*$/.test(el.content)) {
      Message.error(el.error)
      flag = true;
    } else if (el.price && !/^(0|[1-9]\d*)(\.\d{1,2})?$/.test(el.content)) {
      Message.error(el.error)
      flag = true;
    } else if (!el.content){
      Message.error(el.error)
      flag = true;
    }
    if (flag) return flag;
  }
}
