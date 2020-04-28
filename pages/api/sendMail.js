const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   const {name, email, subject, message} = req.body;

   const content = {
      to: process.env.CONTACT_EMAIL_FROM_ADDRESS,
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
      res.status(400).send('Message not sent.')
   }
}
