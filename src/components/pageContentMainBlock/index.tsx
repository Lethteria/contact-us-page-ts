import React from "react";
import styles from "./pageContentMainBlock.module.scss"
import ContactUsInfo from "../contactUsInfo";
import ContactUsForm from "../contactUsForm";
import {Box, Grid} from "@mui/material";

export default function PageContentMainBlock(){
    return(
        <Box className={styles.wrap}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={5}>
                    <ContactUsInfo />
                </Grid>

                <Grid item xs={12} md={7}>
                    <ContactUsForm />
                </Grid>



            </Grid>
        </Box>

    )
}

//<div className={styles.img}></div>