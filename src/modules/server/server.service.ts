import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerService {

  public root(): string {
    return 'Foxer360 Authorization Server is running...';
  }

}
