import React, {useState} from 'react';
import styles from "./headerNavTablet.module.scss";
import NavLinksList from "../navLinksList";
import TabletSubNav from "../tabletSubNav";

export default function HeaderNavTablet(){

    const [expanded, setExpanded] = useState<string | false>(false);

    function onChangeSubNav(panel: string){
        return (event: React.SyntheticEvent, isExpanded: boolean)=> {
            setExpanded(isExpanded ? panel : false);
        };
    }



    return(

        <NavLinksList className={styles.links}
                      renderSubNav={ (page, index) =>
                          page.subLinks && <TabletSubNav links={page.subLinks}
                                                         text={page.text}
                                                         index={index}
                                                         expanded={expanded}
                                                         onChangeExpanded={onChangeSubNav}
                          />
                      }
        />

    )
}