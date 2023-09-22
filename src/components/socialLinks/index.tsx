import React from "react";
import styles from "./socialLinks.module.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Icon from "../icon";


export default function SocialLinks(){
    return(
        <div className={styles.wrap}>
            <a href="#">
                <TwitterIcon fontSize="small"/>
            </a>

            <a href="#">
                <InstagramIcon fontSize="small"/>
            </a>

            <a href="#">
                <Icon iconType="discord"></Icon>
            </a>
        </div>

    )
}
