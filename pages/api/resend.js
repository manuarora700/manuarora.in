import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req, res) => {
  // get email from req
  const { email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: "Manu Arora <hi@manuarora.in>",
      to: [email],
      cc: ["hi@manuarora.in"],
      subject: `Thank you for reaching out to Manu`,
      react: EmailTemplate({ email: email, message: message }),
    });

    console.log("Data from email response: ", data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default sendEmail;
