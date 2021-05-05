import React , {useState} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "gatsby";

import { StaticBrandLogo, staticData } from "./Footer.datas";
import {
  FooterBrandLogo,
  FooterBrandLogoWrapper,
  FooterCopyright,
  FooterCopyrightWrapper,
  FooterDetails,
  FooterItem,
  FooterItemList,
  FooterItemTitle,
  FooterLogo,
  FooterWrapper,
  FooterMain,
  NewsletterInput,
  NewsletterTitle,
  NewsletterWrapper,
  NewsletterButton,
} from "./Footer.styles";
import Logo from "@images/icons/full-logo.svg";

const Alert=(props)=>{
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(10),
    },
  },
}));

const Footer = () => {

  const classes = useStyles();

  const date = new Date();

    const FormUrl= `https://api.convertkit.com/v3/forms/2253998/subscribe`;

    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(false)

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const postDate =async (formData) =>{
      try {
        const response = await fetch(
          FormUrl,
            {
                method: 'post',
                body: formData,
                headers: {
                    accept: 'application/json',
                },
            }
        );
        console.log(response);
        if (response.status===200) {
            setStatus('success');
            setEmail('')
            setOpen(true);
            setDisabled(false);
            return;
        }else{
          setStatus('error');
        setEmail('');
        setOpen(true);
        setDisabled(false);
        }
    } catch (err) {
        setStatus('error');
        setEmail('');
        setOpen(true);
        setDisabled(false);
        console.log(err);
    }
    }

    const handleSubmit =async (e) =>{
    e.preventDefault();

    setDisabled(true);

    const formData = new FormData();
    formData.append('api_key',"Zo1KpOSsWHLEWQ7SpCiCSA");
    formData.append('email', email)
    postDate(formData);
    
    }
    const handleChange = (event)=>{
      const {value} = event.target;
        setEmail(value);
    }


    console.log(open);

  return (
    <>
    <FooterWrapper>
      <FooterLogo to="/">
        <img src={Logo} alt="bmh-logo" draggable="false" />
      </FooterLogo>
      <FooterMain>
        <FooterDetails>
          {staticData.map((item, index) => (
            <div key={index}>
              <FooterItemTitle>{item.title}</FooterItemTitle>
              <FooterItemList>
                {item.items.map((obj, index) => (
                  <FooterItem key={index}>
                    <a href={obj.to} target="_blank">
                      {obj.title}
                    </a>
                  </FooterItem>
                ))}
              </FooterItemList>
            </div>
          ))}
        </FooterDetails>
        <NewsletterWrapper>
          <NewsletterTitle>
            Hear from our mental health experts on how you or someone you know
            can beat depression and anxiety
          </NewsletterTitle>
          <NewsletterInput>
            <input type="text" onChange={handleChange} value={email}  placeholder="Your Email here..." />
            <NewsletterButton onClick={handleSubmit} disabled={disabled} >Subscribe</NewsletterButton>
          </NewsletterInput>
          
        </NewsletterWrapper>
      </FooterMain>
      <FooterBrandLogoWrapper>
        {StaticBrandLogo.map((item, index) => (
          <FooterBrandLogo key={index}>
            <img src={item} alt="brand-logo" draggable="false" />
          </FooterBrandLogo>
        ))}
      </FooterBrandLogoWrapper>
      <FooterCopyrightWrapper>
        <FooterCopyright>
          &copy; {date.getFullYear()} Webpoint Solutions, LLC
        </FooterCopyright>
        <FooterCopyright>Terms & Conditions | Privacy Policies</FooterCopyright>
      </FooterCopyrightWrapper>
    </FooterWrapper>
    <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status}>
          {
            status === "success" ?"Successfully Subscribed to newsletter":"Failed to subscribe"
          }
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
