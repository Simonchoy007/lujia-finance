const { kv } = require('@vercel/kv');
module.exports = async (req, res) => {
  const body = req.body;
  const editPwd = process.env.EDIT_PASSWORD;
  if(body.password !== editPwd){
    return res.status(403).json({ok:false,msg:"密码错误，禁止保存"});
  }
  await kv.set('lujia_finance_data', body.payload);
  return res.status(200).json({ok:true})
}
