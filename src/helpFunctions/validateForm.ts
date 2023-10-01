import {
    IContactFormVal, ISubscrFormVal, IValidateVal,
    IValidationErrors
} from "../types/forms";

function FormValidate(item: IValidateVal<ISubscrFormVal | IContactFormVal>){

    return function Validate(values: ISubscrFormVal | IContactFormVal){

        const errors:IValidationErrors = {};

        const email = values.email.trim();
        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (item.form === "contactUs") {

            const firstName = (values as IContactFormVal).firstName.trim();
            if (!firstName) errors.firstName = 'Required';

            const lastName = (values as IContactFormVal).lastName.trim();
            if (!lastName) errors.lastName = 'Required';


            const phone = (values as IContactFormVal).phone.toString().trim();
            if (!phone) errors.phone = 'Required';
            if (!phone) {
                errors.phone = 'Required';
            } else if (phone.length !== 12) {
                errors.phone = 'Should be 12 characters length';
            }

            const message = (values as IContactFormVal).message.trim();
            if (!message) errors.message = 'Required';
        }

        return errors;
    }
}

export {FormValidate}
