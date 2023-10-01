import React, {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {CheckCircle, Circle} from "@mui/icons-material";
import styles from "./checkboxBlock.module.scss";
import {ICheckbox} from "../../types/forms";

type CheckboxBlockProps = {
    labels: string[]
    checkedArr: string[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckboxBlock(props: CheckboxBlockProps){

    const {labels, checkedArr, onChange} = props;

    const checkboxList = labels.map((item) => (
        <FormControlLabel control={<Checkbox
            color="default"
            size="small"
            icon={<Circle className={styles.unchecked}/>}
            checkedIcon={<CheckCircle className={styles.checked}/>}
            name='checked'
            value={item}

            checked={checkedArr.includes(item)}
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