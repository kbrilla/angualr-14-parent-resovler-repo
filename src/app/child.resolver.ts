import { Injectable } from '@angular/core';

@Injectable()
export class ChildResolver {
  resolve(snapshot) {
    const data = snapshot.data;
    return data.childProp + data.rootResolve + data.rootProp + 'ChildResolve';
  }
}
