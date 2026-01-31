#!/usr/bin/env node
import  {program}  from 'commander';
import dotenv from 'dotenv';
import SendEmail from '../lib/sendEmail';


dotenv.config();
program
  .name('email-cli-tool')
  .description('CLI tool to send emails using Brevo API')
  .version('1.0.0');
program
  .command('send-email')
  .description('Send an email')
    .requiredOption('-t, --to <email>', 'Recipient email address')
    .requiredOption('-s, --subject <subject>', 'Email subject')
    .requiredOption('-c, --content <content>', 'Email content in HTML format')
  .action(async (options) => {
    const { to, subject, content } = options;
    try {
      await SendEmail(to, subject, content);
      console.log('Email sent successfully');
    }
    catch (error) {
      console.error('Error sending email:', error);
    }   
    });
