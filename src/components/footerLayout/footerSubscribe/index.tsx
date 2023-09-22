import React from "react";
import styles from "./footerSubscribe.module.scss";
import SubscribeForm from "../../subscribeForm";
import {Typography} from "@mui/material";


export default function FooterSubscribe(){
    return (
        <div className={styles.wrap}>

            <Typography variant="h4" className={styles.title}>
                Join Our Newsletter
            </Typography>

            <SubscribeForm />

        </div>
    )
}