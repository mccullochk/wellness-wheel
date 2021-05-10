const nodemailer = require('nodemailer')
const { generateTemplate } = require('../../helpers/emailTemplate')

export default function handler(req, res) {
  const data = req.body
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const subject = `Wheel of Wellness for ${data.today}`

  const mail = {
    from: `${process.env.FROM_NAME} ${process.env.FROM_EMAIL}`,
    to: data.email,
    subject,
    html: generateTemplate(),
    attachments: [
      {
        filename: `${subject}.png`,
        path: data.image,
        cid: 'cid:wellness-wheel-1s254f'
      }
    ]
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mail, (error, response) => {
      if (!error) {
        res.status(200).end()
        return resolve()
      } else {
        res.json(error)
        return resolve()
      }
    })
  })
}
