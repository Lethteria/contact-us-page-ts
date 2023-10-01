import React, {useState} from "react";
import styles from "./subscribeForm.module.scss";
import {Alert, Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import {FormValidate} from "../../helpFunctions/validateForm";
import {ISubscrFormVal, IValidateVal} from "../../types/forms";

export default function SubscribeForm(){

    const [openAlert, setOpenAlert] = useState(false);

    function onClose(): void{
        setOpenAlert(false)
    }

    function onOpen(): void{
        setOpenAlert(true)
    }
    const initialInputState:IValidateVal<ISubscrFormVal> = {form: "subscribe",
                                                                  values: {email: ""}
                                                                 }
    const validate = FormValidate(initialInputState);

    const formik = useFormik({
        initialValues:initialInputState.values,
        validate,
        onSubmit: (values, {resetForm}) => {
            onOpen();
            console.log(values)
            resetForm();
        }
    });

    return (
        <div className={styles.wrap}>
            <form  onSubmit={formik.handleSubmit}>
                <TextField
                    type="textarea"
                    placeholder="Your email address"
                    variant="standard"
                    color="greyColor"
                    className={styles.input}
                    {...formik.getFieldProps('email')}

                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email}
                />

                <Button variant="contained"
                        disableElevation
                        type="submit"
                        className={styles.button}
                >
                    Subscribe
                </Button>

                { openAlert
                    ? ( <Alert variant="outlined"
                               className={styles.alert}
                               onClose={onClose}
                        >
                            Your data was send
                        </Alert>
                      )
                    : null
                }

                <p className={styles.message}>
                    *  Will send you weekly updates for your better tool management.
                </p>

            </form>
        </div>
    )
}