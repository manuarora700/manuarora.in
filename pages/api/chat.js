import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    // console.log("REQ.BODY", req.body);
    let { email, message } = req.body;
    await sendgrid.send({
      to: ["manuarorawork@gmail.com"],
      from: "manuarorawork@gmail.com",
      subject: `You've got a new message from: ${email}`,
      html: `Email Address of Sender: ${email}. <br /> Message: ${message}`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
