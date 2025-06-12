class Apierror extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        this.success = false;
        this.errors= errors;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default Apierror;