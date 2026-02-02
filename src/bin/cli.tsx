#!/usr/bin/env node
import { program } from 'commander';
import SendEmail from '../templates/lib/sendEmail';
import 'dotenv/config';
import { initCommand } from '../commands/init';

program
  .name('email-cli-tool')
  .description('CLI tool to send emails using Brevo API and react emails')
  .version('1.0.0');

program
  .command('send-email')
  .description('Send email with react email UI')
  .requiredOption('-t, --to <email>', 'Recipient email address')
  .requiredOption('-s, --subject <subject>', 'Email subject')
  .requiredOption('-c, --content <content>', 'Email content in HTML format')
  .option('-f, --from <from>', 'Sender email address')
  .option('-l, --link <link>', 'Link URL', 'https://example.com/verify')
  .option('-T, --text <text>', 'Link text')

  program.addCommand(initCommand)

program.parse();
