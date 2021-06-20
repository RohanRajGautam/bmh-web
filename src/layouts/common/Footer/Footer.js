import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import {
  FooterCopyright,
  FooterCopyrightWrapper,
  FooterDetails,
  FooterItem,
  FooterItemList,
  FooterItemTitle,
  FooterWrapper,
  FooterMain,
  NewsletterInput,
  NewsletterTitle,
  NewsletterWrapper,
  NewsletterButton,
  PrivacyPolicy,
  FooterSecondary,
  LogoWrapper,
  LeftAlign,
} from "./Footer.styles";
import { staticData } from "./Footer.datas";
import BrandLogo from "./BrandLogo";
import GoToTop from "./GoToTop";

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Footer = () => {
  const date = new Date();

  const FormUrl = `https://api.convertkit.com/v3/forms/2253998/subscribe`;

  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const postDate = async formData => {
    try {
      const response = await fetch(FormUrl, {
        method: "post",
        body: formData,
        headers: {
          accept: "application/json",
        },
      });
      if (response.status === 200) {
        setStatus("success");
        setEmail("");
        setOpen(true);
        setDisabled(false);
        return;
      } else {
        setStatus("error");
        setEmail("");
        setOpen(true);
        setDisabled(false);
      }
    } catch (err) {
      setStatus("error");
      setEmail("");
      setOpen(true);
      setDisabled(false);
      console.log(err);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setDisabled(true);

    const formData = new FormData();
    formData.append("api_key", "Zo1KpOSsWHLEWQ7SpCiCSA");
    formData.append("email", email);
    postDate(formData);
  };
  const handleChange = event => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <>
      <FooterWrapper>
        <FooterMain>
          <FooterDetails>
            {staticData.map((item, index) => (
              <div key={index}>
                <FooterItemTitle>{item.title}</FooterItemTitle>
                <FooterItemList>
                  {item.items.map((obj, index) => (
                    <FooterItem key={index}>
                      <a
                        href={obj.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {obj.title}
                      </a>
                    </FooterItem>
                  ))}
                </FooterItemList>
              </div>
            ))}
          </FooterDetails>
        </FooterMain>
        <FooterSecondary>
          <LeftAlign>
            <LogoWrapper to="/">
              <BrandLogo />
            </LogoWrapper>

            <NewsletterWrapper>
              <NewsletterTitle>Sign Up For Our Newsletter</NewsletterTitle>
              <NewsletterInput>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="email"
                />
                <NewsletterButton onClick={handleSubmit} disabled={disabled}>
                  Subscribe
                </NewsletterButton>
              </NewsletterInput>
            </NewsletterWrapper>
          </LeftAlign>

          <GoToTop />

          <FooterCopyrightWrapper>
            <PrivacyPolicy to="/privacy-policy">
              Terms & Conditions | Privacy Policies
            </PrivacyPolicy>
            <FooterCopyright>
              &copy; {date.getFullYear()} Beautiful Minds Health
            </FooterCopyright>
          </FooterCopyrightWrapper>
        </FooterSecondary>
      </FooterWrapper>
      <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status}>
          {status === "success"
            ? "Successfully Subscribed to newsletter"
            : "Failed to subscribe"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
