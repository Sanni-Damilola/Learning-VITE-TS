import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";

const google_id: string =
  "943490369101-13cbn4sk4bns9n3qc31bqj1phh83li6k.apps.googleusercontent.com";
const google_secret: string = "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";
const google_refreshToken: string =
  "1//04YoJleOkdG4KCgYIARAAGAQSNwF-L9Irvv5dLJgkpVUJzA1dQarkpAJJdUjacWznZgnxjTPERSOtxKxHZ2xW-dWDViQGr8z6nvY";
const google_redirectToken: string =
  "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(
  google_id,
  google_secret,
  google_redirectToken
);

export const verifyCompanyAccount = async (registerCompany: any) => {
  try {
    oAuth.setCredentials({
      access_token: google_refreshToken,
    });

    const getToken = await oAuth.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sannifortune11@gmail.com",
        clientId: google_id,
        clientSecret: google_secret,
        refreshToken: google_refreshToken,
        // accessToken: getToken?.token!,
        accessToken:
          "ya29.a0Ael9sCMqVXtfF4DKa22IxmQK7S1e8aVRh55AhMGHzKC9hIJZmVNLAOvajT-IfVianCVDLQBATCGtzT16WOphUJ8p2tX3zDlPD2ylOICak_pVD2EPBuuSTT3lJHgkX36CGjqCCNPBpA6mQ38jmSq5CHLF4SzbaCgYKAd4SARASFQF4udJhhAMUCkwl1wW1pVSfSQEprQ0163",
      },
    });

    const { rcNumber, name, OTP } = registerCompany;
    const readEjs = path.join(__dirname, "../views/body.ejs");
    const data = await ejs.renderFile(readEjs, {
      registerCompany,
    });

    const mailerOptions: any = {
      from: "lyfCare <sannifortune11@gmail.com>", // sender address
      to: registerCompany?.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Verifiy Your Account", // plain text body
      html: JSON.stringify(data), // html body
    };

    transporter
      .sendMail(mailerOptions)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((err) => {
        console.log("Email Not sent", err);
      });
  } catch (error) {
    console.log("An Error occured In verifyAccount");
  }
};
