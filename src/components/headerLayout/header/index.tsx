import React, {useState} from 'react';
import styles from "./header.module.scss";
import HeaderNavDesktop from "../headerNavDesktop";
import HeaderMenu from "../headerMenu";
import HeaderNavDrawer from "../headerNavDrawer";
import MenuButton from "../menuButton";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';

export default function Header() {

    const [showDrawer, setShowDrawer] = useState(false);
    function toggleDrawer(bool: boolean){
        return function (e: React.KeyboardEvent | React.MouseEvent){
            if (
                e.type === 'keydown' &&
                ((e as React.KeyboardEvent).key === 'Tab' ||
                    (e as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setShowDrawer(bool);
        }
    }

    return (
        <AppBar position="static"
                className={styles.wrap}
        >
            <Container>
                <Toolbar disableGutters>

                    <Typography variant="h3"
                                component="a"
                                href="/"
                                color="black">
                        Logo here
                    </Typography>


                    <Box className={styles.drawerWrap}>
                        <MenuButton onClickMenu={toggleDrawer(true)}/>

                        <Drawer anchor='right'
                                open={showDrawer}
                                onClose={toggleDrawer(false)}
                        >
                            <HeaderNavDrawer onClick={toggleDrawer(false)}
                                             onKeyDown={toggleDrawer(false)}
                            />
                        </Drawer>
                    </Box>

                    <div className={styles.menu}>
                        <HeaderNavDesktop />
                        <HeaderMenu/>
                    </div>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
