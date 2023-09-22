import React from "react";
import styles from "./headerSubNav.module.scss";
import {Menu, MenuItem} from "@mui/material";
import {ILink} from "../../../types/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {clsx} from "clsx";

type DesktopSubNavProps = {
    text: string
    index: number
    openIndex: string | null
    open: boolean
    anchorEl: null | HTMLElement
    onClose: () => void
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    links: ILink[]
}
export default function DesktopSubNav(props:DesktopSubNavProps){

    const { text, index, openIndex, open,
            anchorEl, onClose, onClick, links
          } = props



    function SubPagesList(arr: ILink[]):React.ReactNode{

        return (
            arr.map((subpage, index) => (
                <MenuItem key={index} onClick={onClose}>
                    <a href={subpage.href}>
                        <span>{subpage.text}</span>
                    </a>
                </MenuItem>
            ))
        )
    }

    return (
        <>
            <a href="#" role="button"
               aria-controls={open ? `menu-appbar${index}` : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={onClick}
               data-open={`${index}`}
               className={styles.link}
            >
                {text}

                <ExpandMoreIcon className={clsx(
                                    {[styles.opened]: open && openIndex === `${index}`}
                                )}
                />
            </a>

            <Menu
                id={`menu-appbar${index}`}
                anchorEl={anchorEl}
                open={(open && openIndex === `${index}`)}
                onClose={onClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        boxShadow:
                            `0 1px 1px -1px rgba(0,0,0,0.2),
                                                     0 1px 1px 1px rgba(0,0,0,0.14),
                                                     0 1px 1px 1px rgba(0,0,0,0.12);`,
                    }
                }}
                className={styles.submenu}
            >

                {SubPagesList(links)}

            </Menu>
        </>
    )
}