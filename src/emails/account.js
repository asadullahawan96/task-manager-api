const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from:'asad@c4infotech.com',
        subject:'Welome to the app',
        text:`Welcome to the app, ${name}. Thanks for joining.`
    })
}

const sendCancelEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from:'asad@c4infotech.com',
        subject:`GoodBye ${name}`,
        text:`GoodBye ${name}. Please provide feedback for leaving so we can improve our app.`
    })
}


module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}