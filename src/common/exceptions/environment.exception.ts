import { Colors } from '@source/utils';

export class EnvironmentException extends Error {

  constructor(name: string) {
    const message = `Environment variable ${Colors.green(name)} is not defined in .env file or has bad format or value !`;
    super(message);

    this.name = 'EnvironmentException';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }

}
