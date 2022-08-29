import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'child',
  // Replace with your markup
  template: `
    data.rootProp: {{data.rootProp}}
    <br>
    data.childProp: {{data.childProp}}
    <br>
    data.rootResolve: {{data.rootResolve}}
    <br>
    data.childResolve = data.childProp + data.rootResolve + data.rootProp + 'ChildResolve'
    <br>
    expected: {{data.childProp + data.rootResolve + data.rootProp + 'ChildResolve'}}
    <br>
    actual: {{data.childResolve}}
`,
  styles: [
    `h2 { font-weight: normal; }
  `,
  ],
})
export class ChildComponent {
  // your code goes here
  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => (this.data = data));
  }
}
