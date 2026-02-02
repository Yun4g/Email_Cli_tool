#!/usr/bin/env node
import { program } from 'commander';
import 'dotenv/config';
import { initCommand } from '../commands/init';

program
  .name('email-cli-tool')
  .description('CLI tool to send emails using Brevo API and react emails')
  .version('1.0.0');

program
  .command('send-email')
  .description('Send email with react email UI')
  program.addCommand(initCommand)

program.parse();
