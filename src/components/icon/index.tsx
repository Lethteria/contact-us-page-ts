import React from 'react';
import iconsDefs from "../../assets/icons";

type IconProps = {
    iconType: string
    iconClassName?: string
}
export default function Icon({iconType, iconClassName}: IconProps){

    const icon = iconsDefs[iconType];

    return (
        <svg className={iconClassName}
             width={icon.width}
             height={icon.height}
             viewBox={icon.viewBox}>
            {icon.body}
        </svg>
    )
}
