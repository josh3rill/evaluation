/* tslint:disable:object-literal-sort-keys */
import {
    IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxSnackbarModule, IgxSwitchModule, IgxTextSelectionModule
} from "igniteui-angular";
import { MaskSample1Component } from "../../src/app/data-display/mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "../../src/app/data-display/mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "../../src/app/data-display/mask/mask-sample-3/mask-sample-3.component";
import { DisplayFormatPipe, InputFormatPipe, MaskSample4Component
} from "../../src/app/data-display/mask/mask-sample-4/mask-sample-4.component";
import { MaskSample5Component } from "../../src/app/data-display/mask/mask-sample-5/mask-sample-5.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class MaskConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // mask sample 1
        configs.push(new Config({
            component: MaskSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSnackbarModule, IgxMaskModule, IgxInputGroupModule,
                    MaskSample1Component, IgxTextSelectionModule],
                ngDeclarations: [MaskSample1Component],
                ngImports: [IgxSnackbarModule, IgxMaskModule, IgxInputGroupModule, IgxTextSelectionModule]
            }),
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 2
        configs.push(new Config({
            component: MaskSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxMaskModule, IgxInputGroupModule, MaskSample2Component, IgxIconModule],
                ngDeclarations: [MaskSample2Component],
                ngImports: [IgxMaskModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 3
        configs.push(new Config({
            component: MaskSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, IgxMaskModule, IgxInputGroupModule, MaskSample3Component],
                ngDeclarations: [MaskSample3Component],
                ngImports: [IgxSwitchModule, IgxMaskModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 4
        configs.push(new Config({
            component: MaskSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxMaskModule, IgxInputGroupModule, MaskSample4Component, IgxIconModule,
                    DisplayFormatPipe, InputFormatPipe],
                ngDeclarations: [MaskSample4Component, DisplayFormatPipe, InputFormatPipe],
                ngImports: [IgxMaskModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/mask/"
        }));

        // mask sample 5
        configs.push(new Config({
            component: MaskSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxMaskModule, IgxInputGroupModule, MaskSample5Component, IgxIconModule],
                ngDeclarations: [MaskSample5Component],
                ngImports: [IgxMaskModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/mask/"
        }));

        return configs;
    }
}
