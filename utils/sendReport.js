const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '..', 'playwright-report', 'index.html');

async function sendEmail() {
  const htmlContent = fs.readFileSync(reportPath, 'utf-8');

  const decode_pass = "aWl1bXJmdHRmd3VldGdjdQ==";
  const password = Buffer.from(decode_pass, 'base64').toString('utf-8');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testmustafizur@gmail.com',
      pass: password,
    },
  });

  let info = await transporter.sendMail({
    from: '"Playwright Test Report" <testmustafizur@gmail.com>',
    to: 'mustafizurr171@gmail.com',
    subject: 'Playwright Test Report',
    html: htmlContent,
    attachments: [
      {
        filename: 'index.html',
        path: reportPath,
        contentType: 'text/html',
      },
    ],
  });

  console.log('✅ Report sent: %s', info.messageId);
}

sendEmail().catch(console.error);