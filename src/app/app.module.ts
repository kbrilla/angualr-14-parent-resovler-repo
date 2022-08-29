import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootResolver } from './root.resolver';
import { ChildResolver } from './child.resolver';
import { ChildComponent } from './child.component';

const routes = [
  {
    path: '',
    data: {
      rootProp: 'RootProp ',
    },
    resolve: {
      rootResolve: RootResolver,
    },
    children: [
      {
        path: '',
        data: {
          childProp: 'ChildProp ',
        },
        resolve: {
          childResolve: ChildResolver,
        },
        component: ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [ChildResolver, RootResolver],
})
export class AppModule {}
