const jwt = require("jsonwebtoken");
const secret = "aaa"; // 私钥，用于加密时混淆

//jwt生成token
const token = jwt.sign(
  {
    name: 123,
  },
  secret,
  {
    expiresIn: 60, //秒到期时间
  }
);

console.log(token);
//解密token
jwt.verify(token, secret, function (err, decoded) {
  if (!err) {
    console.log(decoded.name); //会输出123，如果过了60秒，则有错误。
  }
});
