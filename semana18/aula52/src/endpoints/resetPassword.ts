import {Request, Response} from 'express';
import * as nodemailer from 'nodemailer'; 
import dotenv from 'dotenv';
import { hash } from '../services/hashManager';
import connection from '../connection'

dotenv.config()

const resetPassword = async (req:Request, res: Response): Promise<any> =>{
    try {
        // criando nova senha
        const chars: string = "0123456789abcdefABCDEF"
        let newPassword:string =""
        for(let i =0; i < 10; i++){
            let position = Math.floor(Math.random()*chars.length)
            newPassword += chars[position]
        }
        // Enviar e-mail
        let transporter= nodemailer.createTransport( 
          `smtps://<${process.env.NODEMAILER_USER}>%40gmail.com:<${process.env.NODEMAILER_PASSWORD}>@smtp.gmail.com` 
        );   
        var mailOptions = { 
          from : 'from_test@gmail.com', 
          to : 'to_test@gmail.com', 
          subject : 'Hello', 
          text: `<h2>Sua nova senha é</h2><h3>${newPassword}</h3>` 
        }; 
        transporter.sendMail( mailOptions, (error, info) => { 

        console.log(`Message Sent ${info.response}`); 
        }); 

        //salvar no banco
        const encrypt: string = await hash(newPassword)
        await connection.raw(`
            UPDATE User
            SET password = "${encrypt}"
            WHERE email = "email1@email.com";
        `)

        res.send(`Um email foi enviado para ...`)

    } catch (err) {
        console.log(err)
    }
}