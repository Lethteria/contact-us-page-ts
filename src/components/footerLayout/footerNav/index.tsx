import React from "react";
import styles from "./footerNav.module.scss"

import {Grid, Typography} from "@mui/material";
import NavList from "../../navList";
import {footerNavLinks} from "../../../data/links";



export default function FooterNav(){

    return (
        <>
            {footerNavLinks.map((item) =>
                <Grid item xs={6} sm={4} md={3} lg={2} mb={3}
                      key={item.title}
                >
                    <Typography variant="h4">
                        {item.title}
                    </Typography>

                    <NavList links={item.links}
                             className={styles.link}
                    />
                </Grid>
                )
            }
        </>
    )
}
