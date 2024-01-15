require('dotenv').config()
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
    try {
        // Extract data from the request
        const { trip, name, phone, email, dates, message } = JSON.parse(event.body);

        // Create a Nodemailer transporter using your email provider's SMTP settings
        // setup email transporter object
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        // render this html for response email to trip inquiry
        const renderedHtmlForTripEnquiry = `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Inquiry for ${trip}</title >
                    <style>
                        body {
                            font - family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                                    }

                        .container {
                            max - width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                                    }

                        .title {
                            text - align: center;
                        color: #333;
                        font-size: 24px;
                        margin-bottom: 20px;
                                    }

                        .body-content {
                            color: #555;
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 30px;
                        text-align: center;
                                    }

                        .footer {
                            text - align: center;
                        color: #777;
                        font-size: 16px;
                                    }

                        .logo {
                            width: 40%;
                        height: auto;
                                    }
                    </style>
                </head >
                <body>
                    <div class="container">
                        <div class="title">
                            <h2>Inquiry for ${trip}</h2>
                        </div>
                        <div class="body-content">
                            <p>Thank you for reaching out to us! We have received your inquiry and would like to express our
                                appreciation for considering Backpacker Tours.
                                We will get back to you as soon as possible with the information you need. If you have any additional
                                details to share or questions in the meantime, feel free to reach out to us at backpackmumbai@gmail.com
                                or +91 8082647928, +91 8286835202.
                            </p>
                            <h3>Details You Shared</h3>
                            <p>${trip}</p>
                            <p>${dates}</p>
                            <p>Name: ${name}</p>
                            <p>Email: ${email}</p>
                            <p>Contact No: ${phone}</p>
                            <p>Message: ${message}</p>
                        </div>
                        <div class="footer">
                            <img class="logo"
                                src="https://res.cloudinary.com/dgjllfp17/image/upload/v1699731972/backpackers/logo_ifq8uf.png">
                                <p>Email - backpackmumbai@gmail.com</p>
                                <p>Phone - +91 8082647928, +91 8286835202</p>
                        </div>
                    </div>
                </body>
            </html >`

        // render this html for response email for contact us enquiry
        const renderedHtmlForContactUs = `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thanks for the Inquiry, ${name}</title >
                    <style>
                        body {
                            font - family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                                    }

                        .container {
                            max - width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                                    }

                        .title {
                            text - align: center;
                        color: #333;
                        font-size: 24px;
                        margin-bottom: 20px;
                                    }

                        .body-content {
                            color: #555;
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 30px;
                        text-align: center;
                                    }

                        .footer {
                            text - align: center;
                        color: #777;
                        font-size: 16px;
                                    }

                        .logo {
                            width: 40%;
                        height: auto;
                                    }
                    </style>
                </head >
                <body>
                    <div class="container">
                        <div class="title">
                            <h2>Thanks for the Inquiry, ${name}!</h2>
                        </div>
                        <div class="body-content">
                            <p>Thank you for reaching out to us! We have received your inquiry and would like to express our
                                appreciation for considering Backpacker Tours.
                                We will get back to you as soon as possible with the information you need. If you have any additional
                                details to share or questions in the meantime, feel free to reach out to us at backpackmumbai@gmail.com
                                or +91 8082647928, +91 8286835202.
                            </p>
                            <h3>Details You Shared</h3>
                            <p>Name: ${name}</p>
                            <p>Email: ${email}</p>
                            <p>Contact No: ${phone}</p>
                            <p>Message: ${message}</p>
                        </div>
                        <div class="footer">
                            <img class="logo"
                                src="https://res.cloudinary.com/dgjllfp17/image/upload/v1699731972/backpackers/logo_ifq8uf.png">
                                <p>Email - backpackmumbai@gmail.com</p>
                                <p>Phone - +91 8082647928, +91 8286835202</p>
                        </div>
                    </div>
                </body>
            </html >`

        // Send the email
        const info = await transporter.sendMail({
            from: process.env.SENDER,
            to: `${email}, ${process.env.SENDER} `,
            subject: `Thanks for Inquiry ${name}!`,
            html: trip ? renderedHtmlForTripEnquiry : renderedHtmlForContactUs,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!', info }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', message: error.message }),
        };
    }
};
