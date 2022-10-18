require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken);

const send = async (body, to) => {
  try {
    console.log({body,to})
    const message = await client.messages
    .create({
      body,
      from: '+12534001865',
      to
    })
    console.log(message.sid);
  } catch(e) {
    console.error(e);
  }

}

module.exports = send;

