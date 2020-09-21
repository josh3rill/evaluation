/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonDirective, IgxButtonModule, IgxCardModule, IgxComboModule,
    IgxDividerModule, IgxIconModule, IgxOverlayService, IgxSwitchModule, IgxToggleModule
} from "igniteui-angular";
import { CardSample1Component } from "../../src/app/layouts/card/card-sample-1/card-sample-1.component";

import { MyDynamicCardComponent
} from "../../src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component";
import { OverlaySampleMain1Component
} from "../../src/app/interactions/overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component
} from "../../src/app/interactions/overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlayPositionSample1Component
} from "../../src/app/interactions/overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component
} from "../../src/app/interactions/overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayPositionSample3Component
} from "../../src/app/interactions/overlay/overlay-positioning-3/overlay-position-sample-3.component";
import { OverlayScrollSample1Component
} from "../../src/app/interactions/overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component
} from "../../src/app/interactions/overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
import { OverlayStylingComponent } from "../../src/app/interactions/overlay/overlay-styling/overlay-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class OverlayConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: OverlaySampleMain1Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleMain1Component, IgxCardModule,
                    MyDynamicCardComponent],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain1Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlaySampleMain2Component,
            additionalFiles: ["/src/app/layouts/card/card-sample-1/card-sample-1.component.ts",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.scss",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.html",
            "/src/app/layouts/card/card.blueprint.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleMain2Component,
                    CardSample1Component, IgxSwitchModule, IgxCardModule,
                    IgxButtonDirective, IgxDividerModule, IgxButtonModule],
                ngEntryComponents: [CardSample1Component],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain2Component, CardSample1Component],
                ngImports: [IgxIconModule, IgxCardModule, IgxDividerModule, IgxButtonModule]
            })
        }));

        configs.push(new Config({
            component: OverlayPositionSample1Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample1Component, IgxCardModule,
                    MyDynamicCardComponent],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample1Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayPositionSample2Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample2Component, IgxCardModule,
                    MyDynamicCardComponent],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample2Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayPositionSample3Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample3Component, IgxCardModule,
                    MyDynamicCardComponent],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample3Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayScrollSample2Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample2Component, IgxCardModule,
                    MyDynamicCardComponent],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample2Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayScrollSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample1Component,
                     IgxSwitchModule, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxToggleModule, IgxComboModule, IgxOverlayService, OverlayStylingComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayStylingComponent],
                ngImports: [IgxToggleModule, IgxComboModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        return configs;
    }
}
