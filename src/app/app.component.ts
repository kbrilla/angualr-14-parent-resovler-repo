import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  // Replace with your markup
  template: `
    <router-outlet></router-outlet>
`,
  styles: [
    `h2 { font-weight: normal; }
  `,
  ],
})
export class AppComponent {
  // your code goes here
  constructor(private route: ActivatedRoute) {}
}
