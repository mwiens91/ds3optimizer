import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ArmorService }     from './armory.service';
import { OptimizerComponent }     from './optimizer.component';
import { ArmorSelectionsComponent }     from './armor.selections.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ArmorService
    ]
})
@RouteConfig([
    {
        path: '/optimizer',
        name: 'Optimizer',
        component: OptimizerComponent,
        useAsDefault: true
    },
    {
        path: '/armor.selections',
        name: 'ArmorSelections',
        component: ArmorSelectionsComponent,
    }
])
export class AppComponent { }