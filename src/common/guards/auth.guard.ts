import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers || !ctx.headers.authorization) {
      return false;
    }

    const regex = /^Bearer\s*([^\s]+)$/i;
    const match = regex.exec(ctx.headers.authorization);
    if (!match || !match[1]) {
      return false;
    }

    // Check if we have access_token in our chache
    // If yes, check expiration
    // If not, check access_token and then expiration

    return true;
  }

}
