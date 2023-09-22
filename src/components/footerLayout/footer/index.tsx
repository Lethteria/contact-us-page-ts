import React from "react";
import styles from "./footer.module.scss";
import FooterLogo from "../footerLogo";
import FooterContent from "../footerContent";
import {Container} from "@mui/material";

export default function Footer(){
    return(
        <footer className={styles.wrap}>
            <Container>

                <FooterLogo/>

                <FooterContent/>

            </Container>
        </footer>
    )
}