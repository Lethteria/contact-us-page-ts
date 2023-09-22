import React from "react";
import styles from "./footerLogo.module.scss";
import {Typography} from "@mui/material";

export default function FooterLogo(){
    return(
        <div className={styles.wrap}>
            <Typography variant="h2"
                        component="a"
                        href="/"
                        color="white"
            >
                Logo here
            </Typography>
        </div>
    )
}