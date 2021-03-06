/* tslint:disable:object-literal-sort-keys */
import { IgxButtonGroupModule, IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular";
import {
    ButtonsDisabledComponent
} from "../../src/app/data-entries/buttons/buttons-disabled-sample/buttons-disabled-sample";
import {
    ButtonsDisplayDensityComponent
} from "../../src/app/data-entries/buttons/buttons-display-density/buttons-display-density.component";
import {
    ButtonsSample1Component
} from "../../src/app/data-entries/buttons/buttons-sample-1/buttons-sample-1.component";
import {
    ButtonsStyleComponent
} from "../../src/app/data-entries/buttons/buttons-style/buttons-style.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ButtonConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // buttons sample 1
        configs.push(new Config({
            component: ButtonsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, ButtonsSample1Component],
                ngDeclarations: [ButtonsSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons roundness
        configs.push(new Config({
            component: ButtonsDisabledComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, ButtonsDisabledComponent],
                ngDeclarations: [ButtonsDisabledComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons display density
        configs.push(new Config({
            component: ButtonsDisplayDensityComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, IgxButtonGroupModule,
                    ButtonsDisplayDensityComponent],
                ngDeclarations: [ButtonsDisplayDensityComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule, IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // button style
        configs.push(new Config({
            component: ButtonsStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, IgxButtonGroupModule,
                    ButtonsStyleComponent],
                ngDeclarations: [ButtonsStyleComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule, IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        return configs;
    }
}
