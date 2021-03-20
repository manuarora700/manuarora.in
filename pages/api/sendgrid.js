import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: req.body.email,
      from: "manuarorawork@gmail.com",
      subject: "Greetings! Thankyou for contacting Manu",
      text:
        "Thank you for contacting me from my website.\nPlease reply to this mail with your requirements and let me know how I can help you with your project.\n\nBest Regards,\nManu Arora\nSoftware Developer\n+91, 9587738861\n",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
