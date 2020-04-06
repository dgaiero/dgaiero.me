const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
   sgMail.setApiKey(process.env.sendgrid_api_key);
   const {name, email, subject, message} = req.body;
   // console.log(`Got ${name} at ${email} with subject ${subject} and message of ${message}`)

   const content = {
      to: process.env.contact_email_from_address,
      cc: email,
      from: email,
      subject: subject ? `[dgaiero.me] | ${subject}` : `[dgaiero.me] | Inquiry from ${name}`,
      text: `Email from: ${email}\nName: ${name}\nMessage:\n${message}`,
      html: `
         <p><b>Email: </b>${email}</p>
         <p><b>Name: </b>${name}</p>
         <p><b>Message: </b>
            <br>
            ${message}
         </p>`,
   };
   try {
      await sgMail.send(content)
      res.status(200).send('Message sent successfully.')
   } catch (error) {
      console.log('ERROR', error)
      res.status(400).send('Message not sent.')
   }
}
