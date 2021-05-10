export function generateTemplate() {
  return `
    <html>
      <meta charset="utf-8">
      <body style="font-family: lato; font-size: 16px;">
        <p>Hey there,</p>

        <p>
          Here is your Wheel of Wellness. I hope it helps you find some balance!
        </p>

        <p>All the best,</p>

        <p style="margin: 0;">
          <b>${process.env.FROM_NAME}</b>
          ${
            process.env.PRONOUNS
              ? `<span style="margin: 0; color: rgb(208, 83, 130)"><i>(${process.env.PRONOUNS})</i></span>`
              : ''
          }
        </p>
        <a href="${
          process.env.COMPANY_URL
        }" style="color: rgb(31, 131, 25); font-size: 14px;">
          ${process.env.COMPANY_NAME}
        </a>

        <p>---</p>

        <div style="font-family: cursive;">
          <p>
            <b>
              🤔 What 5 minute action are you ready, willing, and able to take
              today in pursuit of positive change?
            </b>
          </p>
        </div>

      </body>
    </html>
  `
}
