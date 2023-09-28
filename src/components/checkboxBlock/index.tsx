import React, {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {CheckCircle, Circle} from "@mui/icons-material";
import styles from "./checkboxBlock.module.scss";
import {ICheckbox} from "../../types/forms";

type CheckboxBlockProps = {
    labels: string[]
    isChecked: ICheckbox
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckboxBlock(props: CheckboxBlockProps){

    const {labels, isChecked, onChange} = props;

    const checkboxList = labels.map((item,index) => (
        <FormControlLabel control={<Checkbox
            color="default"
            size="small"
            icon={<Circle className={styles.unchecked}/>}
            checkedIcon={<CheckCircle className={styles.checked}/>}
            name='contact-us'
            value={item}
            checked={isChecked[item]}
            onChange={onChange}
        />}
                          label={item}
                          className={styles.checkbox}
                          key={item}
        />
    ))

    return (
        <div>
            {checkboxList}
        </div>
    )
}