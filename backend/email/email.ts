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
          "ya29.a0Ael9sCPzJfvlXHNGMGdikNSEq1C0_eb8Wt1dz_bSqYK5kva6oT1S0__rF1z7BYftbQtBZV1vBr7PKZ__QuEF6JwJx0xlgaUGv5_A58oxN_UOOYGEc1karSZRryNujyLKap0BfIn9VT07Fu6AS37CrhodAfqCaCgYKAfoSARASFQF4udJhsza7tZMctDQbZ4qraFB2BA0163",
      },
    });

    const { rcNumber, name, OTP } = registerCompany;
    const readEjs = path.join(__dirname, "../views/Body.ejs");

    const data = await ejs.renderFile(readEjs, {
      rcNumber,
      name,
      OTP,
    });

    const mailerOptions = {
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
