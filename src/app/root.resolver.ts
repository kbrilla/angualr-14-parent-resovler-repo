import { Injectable } from '@angular/core';

@Injectable()
export class RootResolver {
  resolve(route) {
    return 'RootResolve ';
  }
}
