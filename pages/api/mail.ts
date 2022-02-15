import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'



type EmailProps = {
    name: string;
    email: string;
    message?: string;

}


export default async function handler(req: NextApiRequest & EmailProps, res: NextApiResponse) {
    try {

        mail.setApiKey(process.env.SENDGRID_API_KEY)
        let { name, email, message } = req.query;

        console.log("sending using", name, email, message)


        let result = await mail.send({
            from: `info@bengerlovin.me`,
            to: 'ben.gerlovin@gmail.com',
            subject: '[Portfolio] Contact Form Submission',
            text: `From: ${name} / ${email}, message below: \n\n${message}`,

        })

        res.status(200).json({ msg: "successfully sent", result: result })

    } catch (err) {
        res.status(500).json({ error: 'Failed to send data' })
    }
}