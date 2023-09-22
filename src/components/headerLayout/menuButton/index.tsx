import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

type MenuButtonProps = {
    onClickMenu: (e: React.KeyboardEvent | React.MouseEvent) => void
}
export default function MenuButton({onClickMenu}: MenuButtonProps){
    return (
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClickMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
    )
}