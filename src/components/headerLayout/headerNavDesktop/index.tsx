import React, {useState} from 'react';
import styles from "./HeaderNavDesktop.module.scss";
import DesktopSubNav from "../desktopSubNav";
import NavLinksList from "../navLinksList";

export default function HeaderNavDesktop(){

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const open = Boolean(anchorEl);

    function onClickSubNav(e: React.MouseEvent<HTMLElement>){
        let el = e.currentTarget;
        setAnchorEl(el);
        setOpenIndex(() => el.getAttribute("data-open"))
        console.log( e.currentTarget)
    }

    function onCloseSubNav(){
        setAnchorEl(null);
    }

    return(

        <NavLinksList className={styles.wrap}
                      renderSubNav={ (page, index) =>
                          page.subLinks && <DesktopSubNav links={page.subLinks}
                                                        text={page.text}
                                                        index={index}
                                                        openIndex={openIndex}
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClick={onClickSubNav}
                                                        onClose={onCloseSubNav}
                          />
                      }
        />

    )
}