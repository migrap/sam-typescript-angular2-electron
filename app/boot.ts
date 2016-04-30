import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { RocketComponent } from './rocket/rocket.component';

@Component({
    selector: 'app',
    template: `<h1>Hello Angular2! We're glad this is working!</h1>`
})
export class AppComponent {
}

bootstrap(RocketComponent)
    .catch((error: Error) => console.error(error));