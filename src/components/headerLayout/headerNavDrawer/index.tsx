import React from 'react';
import styles from "./headerNavDrawer.module.scss";
import Box from "@mui/material/Box";
import HeaderMenu from "../headerMenu";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import HeaderNavTablet from "../headerNavTablet";

type HeaderNavDrawerProps = {
    onClick: (e: React.KeyboardEvent | React.MouseEvent) => void
    onKeyDown: (e: React.KeyboardEvent | React.MouseEvent) => void
}

export default function HeaderNavDrawer(props: HeaderNavDrawerProps){

    const {onClick, onKeyDown} = props

    return(
        <Box className={styles.wrap}
             role="presentation"
        >
            <div className={styles.header}>
                <Typography variant="h3"
                            color="white">
                    Logo here
                </Typography>

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    className={styles.button}
                >
                    <CloseIcon />
                </IconButton>
            </div>

            <HeaderNavTablet />

            <HeaderMenu className={styles.menu}/>
        </Box>
    )
}
