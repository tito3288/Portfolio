import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "#100F0F",
        width: "100%",
        height: "200px",
        textAlign: "center",
      }}
    >
      <div style={{ marginTop: "5%" }}>
        <GitHubIcon
          className="mx-1"
          style={{
            color: "white",
            fontSize: "60px",
            backgroundColor: "#171717",
            padding: "9px",
            borderRadius: "50%",
          }}
        />
        <LinkedInIcon
          className="mx-1"
          style={{
            color: "white",
            fontSize: "60px",
            backgroundColor: "#171717",
            padding: "9px",
            borderRadius: "50%",
          }}
        />
        <FacebookIcon
          className="mx-1"
          style={{
            color: "white",
            fontSize: "60px",
            backgroundColor: "#171717",
            padding: "9px",
            borderRadius: "50%",
          }}
        />
        <InstagramIcon
          className="mx-1"
          style={{
            color: "white",
            fontSize: "60px",
            backgroundColor: "#171717",
            padding: "9px",
            borderRadius: "50%",
          }}
        />
        <h4 style={{ color: "white", marginTop: "50px" }}>
          Bryan Arambula ©️{getYear}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
