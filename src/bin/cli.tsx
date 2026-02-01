#!/usr/bin/env node
import { program } from 'commander';
import dotenv from 'dotenv';
import SendEmail from '../lib/sendEmail';
import { render } from '@react-email/components';
import SendEmailUi from '../react-email-starter/emails/SendEmail';



dotenv.config();
program
  .name('email-cli-tool')
  .description('CLI tool to send emails using Brevo API')
  .version('1.0.0');
program
  .command('send-email')
  .description('Send email with react email Ui')
  .requiredOption('-t, --to <email>', 'Recipient email address')
  .requiredOption('-s, --subject <subject>', 'Email subject')
  .requiredOption('-c, --content <content>', 'Email content in HTML format')
  .option('-f, --from <from>', 'Sender email address', process.env.EMAIL_FROM ) 
  .option('-l, --link <link>', ' link URL', 'https://example.com/verify')
  .option('-T, --text <text>', 'Link text', )
     .action(async (options) => {
      const link = {
        url: options.link ,
        text: options.text 
    };


    const html = await render(
      <SendEmailUi 
        heading="Welcome to Our Service"
        message ={options.content}
        link = {link}
        footer = "If you did not sign up for this account, please ignore this email."
      />
       )

       try {
         await SendEmail(options.to, options.subject, html);
         console.log('Email sent successfully');
       } catch (error) {
        console.error('Error sending email:', error);
        throw error;
        
       }
  });

  program.parse();
