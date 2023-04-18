import React from "react";
import { motion, useAnimation } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const curentYear = new Date().getFullYear();

  const control = useAnimation();

  const [state, handleSubmit, reset] = useForm("xlekpvge");
  const [showThanksMessage, setShowThanksMessage] = React.useState(false);

  const onSubmit = (data) => {
    handleSubmit(data);
    if (state.succeeded) {
      reset();
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 4000); // set the time for 5 seconds
    }
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 4000); // set the time for 5 seconds
    }
  }, [state.succeeded]);

  if (showThanksMessage) {
    return (
      <div className="contact-background">
        <div style={{ width: "100%", height: "100%" }} className="contact-form">
          <Container>
            <h1 className="thankyou-page">
              Thank you for your email! I'll get back to you as soon as
              possible. 🏃‍♂️💨
            </h1>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-background">
      <div style={{ width: "100%", height: "100%" }} className="contact-form">
        <form className="contact-form" onSubmit={onSubmit}>
          <h1 className="contact-title">Contact</h1>

          <motion.span
            className="contact-title-dot"
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ type: "spring", damping: 5 }}
          >
            .
          </motion.span>

          <input
            id="name"
            type="text"
            name="name"
            className="mb-1 contact-input"
            placeholder="Name"
          ></input>
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            className="mb-1 contact-input"
            placeholder="Email"
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="subject"
            type="text"
            name="subject"
            className="mb-1 contact-input"
            placeholder="Subject"
          ></input>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />

          <textarea
            id="message"
            name="message"
            className="contact-textarea"
            placeholder="Enter Message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <motion.div animate={control} transition={{ duration: 0.5 }}>
            <Button
              className="my-4"
              type="submit"
              style={{
                backgroundColor: "transparent",
                border: "solid #d2001a",
              }}
              onClick={() => control.start({ scale: [1.5, 1] })}
              disabled={state.submitting}
            >
              Submit
            </Button>
          </motion.div>
          <p style={{ marginBottom: "1px" }}>
            Email me for any questions <br /> or would like me to do a job for
            you! <br /> Se Habla Español.
          </p>
        </form>

        {/* BEGINNING OF FOTTER SECTION */}

        <motion.div
          className="footer"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", damping: 2 }}
        >
          <a href="https://github.com/tito3288">
            <GitHubIcon
              className="mx-1 social-icon"
              style={{
                color: "white",
                fontSize: "60px",
                backgroundColor: "#171717",
                padding: "9px",
                borderRadius: "50%",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/bryan-arambula-823a86191/">
            <LinkedInIcon
              className="mx-1 social-icon"
              style={{
                color: "white",
                fontSize: "60px",
                backgroundColor: "#171717",
                padding: "9px",
                borderRadius: "50%",
              }}
            />
          </a>
          <a href="https://www.facebook.com/bryan.josepharambula">
            <FacebookIcon
              className="mx-1 social-icon"
              style={{
                color: "white",
                fontSize: "60px",
                backgroundColor: "#171717",
                padding: "9px",
                borderRadius: "50%",
              }}
            />
          </a>
          <a href="https://www.instagram.com/vinda_lavida/">
            <InstagramIcon
              className="mx-1 social-icon"
              style={{
                color: "white",
                fontSize: "60px",
                backgroundColor: "#171717",
                padding: "9px",
                borderRadius: "50%",
              }}
            />
          </a>
          <h4 className="footer-title">Bryan Arambula ©️{curentYear}</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
