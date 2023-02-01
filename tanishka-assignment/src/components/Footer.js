import React from "react";
import { Instagram, Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="home__footer">
            <div className="footer__text">
                <p>
                    © {year} - goshoppify.com
                </p>
            </div>
            <div className="footer__social">
                <a href="/#" className="social-button">
                    <Facebook />
                </a>
                <a href="/#" className="social-button">
                    <Twitter />
                </a>
                <a href="/#" className="social-button">
                    <Instagram />
                </a>
                <a href="/#" className="social-button">
                    <LinkedIn />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
