import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";

const google_id: string =
  "367762056277-jtls6icdrtvdrpu29988a4p41cebi5r8.apps.googleusercontent.com";
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

    const readEjs = path.join(__dirname, "../views/body");
    const data = ejs.renderFile(readEjs, {});

    const mailerOptions: any = {
      from: "lyfCare <sannifortune11@gmail.com>", // sender address
      to: registerCompany?.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Verifiy Your Account", // plain text body
      html: data, // html body
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
