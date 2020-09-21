/* tslint:disable:object-literal-sort-keys */
import { RouterModule } from "@angular/router";
import {
    IgxButtonModule, IgxIconModule, IgxLayoutModule,
    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule
} from "igniteui-angular";
import { NavDrawerMiniComponent } from "../../src/app/menus/navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "../../src/app/menus/navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import {
    NavDrawerRoutingComponent
} from "../../src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component";
import {
    NavDrawerSimpleComponent
} from "../../src/app/menus/navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import {
    NavDrawerStylingComponent
} from "../../src/app/menus/navdrawer/nav-drawer-styling/nav-drawer-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class NavdrawerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: NavDrawerSimpleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule, NavDrawerSimpleComponent],
                ngDeclarations: [NavDrawerSimpleComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerPinComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule, NavDrawerPinComponent],
                ngDeclarations: [NavDrawerPinComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerMiniComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule,
                    NavDrawerMiniComponent],
                ngDeclarations: [NavDrawerMiniComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerRoutingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxLayoutModule,
                    IgxNavigationDrawerModule,
                    IgxRippleModule,
                    IgxToggleModule,
                    NavDrawerRoutingComponent,
                    RouterModule
                ],
                ngDeclarations: [NavDrawerRoutingComponent],
                ngImports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxLayoutModule,
                    IgxNavigationDrawerModule,
                    IgxRippleModule,
                    IgxToggleModule,
                    RouterModule,
                    `
                    RouterModule.forRoot([
                        {path: "avatar", component: NavDrawerRoutingComponent},
                        {path: "badge", component: NavDrawerRoutingComponent},
                        {path: "button-group", component: NavDrawerRoutingComponent}
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerStylingComponent,
            additionalFiles: [
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.ts",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.html",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxLayoutModule,
                    IgxNavigationDrawerModule,
                    IgxRippleModule,
                    IgxToggleModule,
                    NavDrawerRoutingComponent,
                    NavDrawerStylingComponent,
                    RouterModule
                ],
                ngDeclarations: [
                    NavDrawerRoutingComponent,
                    NavDrawerStylingComponent
                ],
                ngImports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxLayoutModule,
                    IgxNavigationDrawerModule,
                    IgxRippleModule,
                    IgxToggleModule,
                    RouterModule,
                    `
                    RouterModule.forRoot([
                        {path: "avatar", component: NavDrawerRoutingComponent},
                        {path: "badge", component: NavDrawerRoutingComponent},
                        {path: "button-group", component: NavDrawerRoutingComponent}
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        return configs;
    }
}
