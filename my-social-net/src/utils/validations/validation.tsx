export type ValidatorType = (value: string) => string | undefined;

export const required: ValidatorType = (value) => {
    if (!value) return 'This field cannot be empty';
    return undefined;
}

export const maxLength = (max: number): ValidatorType => (value) => {
    if (value && value.length > max) {
        return `Must be ${max} characters or less`
    }
    else {
        return undefined
    }
};

export const minLength = (min: number): ValidatorType => (value) => {
    if (value && value.length < min) {
        return `Must be at least ${min} characters `
    } else {
        return undefined;
    }
};

export const email = (value: string) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else {
        return undefined
    }
}