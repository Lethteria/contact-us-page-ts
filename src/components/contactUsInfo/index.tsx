import React from "react";
import styles from "./contactUsInfo.module.scss"
import Contacts from "../contacts";
import SocialLinks from "../socialLinks";
import {Typography} from "@mui/material";

export default function ContactUsInfo(){
    return(
        <div className={styles.wrap}>

            <Typography variant="h3" color="white">
                Contact Information
            </Typography>

            <p>Say something to start a live chat!</p>

            <Contacts />

            <SocialLinks />
        </div>
    )
}
