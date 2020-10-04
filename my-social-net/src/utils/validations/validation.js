
export const required = (value) => {
    if (!value) return 'This field cannot be empty';
    return undefined;
}

export const maxLength = (max) => (value) => {
    if (value && value.length > max) {
        return `Must be ${max} characters or less`
    }
    else {
        return undefined
    }
};

export const minLength = (min) => (value) => {
    if (value && value.length < min) {
        return `Must be at least ${min} characters `
    } else {
        return undefined;
    }
};

export const email = (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else {
        return undefined
    }
}