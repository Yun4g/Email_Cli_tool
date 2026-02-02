import axios from "axios";



const SendEmail = async (to: string, subject:  string , Html: string, BrevoAPIKey?: string) => {     
    try {
        await axios.post("https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "Your Name",
        email: process.env.EMAIL_FROM,
      },
      to: [{ email: to }],
      subject,
      htmlContent: Html,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY! || BrevoAPIKey,
        "Content-Type": "application/json",
      },
      timeout: 10000,
    }
  );
    } catch (error) {
      console.log("Error sending email:", error);
      throw error;
        
    }
}



export default SendEmail;