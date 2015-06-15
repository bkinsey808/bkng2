/// <reference path="../../../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'welcome'
})
@View({
    templateUrl: 'components/welcome/welcome.html'
})

export class WelcomeComponent {
    name: string;
    constructor() {
        this.name = 'name, name';
    }
}
