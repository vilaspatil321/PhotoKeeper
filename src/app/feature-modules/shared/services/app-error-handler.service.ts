import { ErrorHandler, Injectable} from '@angular/core';
@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor() { }
    handleError(error) {
        const message = error.message ? error.message : error.toString();
        console.log('Unexpected error has occured.' + message)
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        //throw error;
    }

}