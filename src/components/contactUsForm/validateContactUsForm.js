function Validate(values){
    const errors = {};
    const firstName = values.firstName.trim();
    if (!firstName) errors.firstName = 'Required';

    const lastName = values.lastName.trim();
    if (!lastName) errors.lastName = 'Required';

    const email = values.email.trim();
    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    const phone = values.phone.toString().trim();
    if (!phone) errors.phone = 'Required';
    if (!phone) {
        errors.phone = 'Required';
    } else if (phone.length !== 12) {
        errors.phone = 'Should be 12 characters length';
    }

    const message = values.message.trim();
    if (!message) errors.message = 'Required';

    return errors;
}

export {Validate}
