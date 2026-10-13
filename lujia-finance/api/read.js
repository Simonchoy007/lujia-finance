const { kv } = require('@vercel/kv');
module.exports = async (req, res) => {
  try {
    const data = await kv.get('lujia_finance_data');
    res.status(200).json({ ok:true, payload: data || null });
  } catch(e){
    res.status(500).json({ok:false,error:e.message})
  }
}
