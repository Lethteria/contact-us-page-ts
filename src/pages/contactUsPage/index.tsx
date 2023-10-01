import React from "react";
import styles from "./contactUsPage.module.scss"
import {Container} from "@mui/material";
import PageContentHeader from "../../components/pageContentHeader";
import PageContentMainBlock from "../../components/pageContentMainBlock";

export default function ContactUsPage(){
    return (
        <div className={styles.wrap}>
            <Container>
                <PageContentHeader />
                <PageContentMainBlock />
            </Container>
        </div>
    )
}