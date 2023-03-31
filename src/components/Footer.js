import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "#100f0f",
        width: "100%",
        height: "100px",
        textAlign: "center",
      }}
    >
      <h4 style={{ color: "white", marginTop: "8%" }}>
        Bryan Arambula ©️{getYear}
      </h4>
    </div>
  );
};

export default Footer;
