import React from "react";
import styles from "./footerContent.module.scss";
import {Grid} from "@mui/material";
import FooterContacts from "../footerContacts";
import FooterNav from "../footerNav";
import FooterSubscribe from "../footerSubscribe";

export default function FooterContent(){
    return(
        <div className={styles.wrap}>
            <Grid container spacing={2}>

                <Grid item xs={6} sm={12} md={12} lg={3} mb={3}>
                    <FooterContacts/>
                </Grid>

                <FooterNav/>

                <Grid item xs={12} sm={8} md={3}>
                    <FooterSubscribe/>
                </Grid>

            </Grid>
        </div>
    )
}