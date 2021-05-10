## Getting Started

First, set the environment variables:

```
FROM_EMAIL= # the email address you would like the emails to be from
FROM_NAME= # the sender name - goes in the "from" field and used in email signature
PRONOUNS= #ex. she/her; placed beside FROM_NAME in email signature
COMPANY_NAME= # placed in email signature with COMPANY_URL href
COMPANY_URL= # attached to the COMPANY_NAME as href on the <a /> tag

SMTP_HOST= # ex. smtp.mailgun.org
SMTP_PORT= # ex. 587
SMTP_USER= # username for your smtp
SMTP_PASS= # password for you smtp
```

Then run the development server:

```bash
npm run dev
```

To build a production version, run:
```bash
npm run build
```

To see the production build, run:
```bash
npm start
```

## Emails

If you'd like to create a customized email template, replace the `<html>` in
[/helpers/emailTemplate.js](./helpers/emailTemplate.js) with your own custom
styling.
