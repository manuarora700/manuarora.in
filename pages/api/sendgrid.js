import sendgrid from "@sendgrid/mail";
import { DOMAIN, NAME } from "constants/app";
import * as Social from "constants/social";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: req.body.email,
      from: Social.EMAIL_ID,
      subject: "Greetings! Thank you for contacting me",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>${NAME}</title>
        <meta name="description" content="Thank you for contacting">
        <meta name="author" content="${NAME}">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hello, ${req.body.email} 👋</h3>
              <div style="font-size: 16px;">
              <p>Thank you for contacting me through my website. I'm excited to know more about you.</p>
              <p><span class="spantext" style="font-weight: bold;">Reply</span> to this email with your fascinating ideas and I will get back to you.</p>
              <p>Meanwhile, <a class="blog" href="https://${DOMAIN}/blog/" style="text-decoration: none;color: blue;font-weight: bold;">checkout my blog</a> to get more insights about me.</p>
              <p>Or simply, just say Hi :) <a href="https://wa.me/${Social.COUNTRY_CODE_PNO}${Social.PHONE_NO}?text=Hi" target="__blank" class="whatsapp" style="text-decoration: none;font-weight: bold;background: #10B981;padding: 4px;border-radius: 5px;color: white;">WhatsApp</a></p>
              <br>
              </div>
              <img src="https://${DOMAIN}/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>${NAME}<br>Software Developer<br>+${Social.COUNTRY_CODE_PNO} ${Social.PHONE_NO}</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://${DOMAIN}/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://${DOMAIN}/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="${Social.GITHUB_URL}" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="${Social.INSTAGRAM_URL}" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="${Social.LINKEDIN_URL}" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                <a href="${Social.TWITTER_URL}" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
