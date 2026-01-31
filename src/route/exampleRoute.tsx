import { render } from "@react-email/components";
import e, { Router } from "express";
import SendEmailUi from "../react-email-starter/emails/SendEmail";
import SendEmail from "../lib/sendEmail";



const route = Router();


route.post('/send-email', async (req, res) => {
    const {email} = req.body;
    if (!email) {
      return  res.status(400).send('Email is required');
    }
    const link = {
        url: 'https://example.com/verify',
        text: 'Verify Email'
    };


   const html = await render(
      <SendEmailUi 
        heading="Welcome to Our Service"
        message="example.com is excited to have you on board. Please verify your email to get started."
        link={link}
        footer="If you did not sign up for this account, please ignore this email."
      />
   );

     await SendEmail(email, "Welcome to Our Service", html);
    res.send('Email sent successfully');
});


export default route;