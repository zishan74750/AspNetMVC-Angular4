import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>{{desc}}</h1> <p>If you see this message, everything is working fine!</p>`,
})
export class AppComponent  {
		desc = 'Welcome to ASP.NET MVC & Angular 4 Simple Template';

	constructor() {

	}
}
