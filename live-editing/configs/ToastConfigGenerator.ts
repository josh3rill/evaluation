/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxRippleModule, IgxToastModule, IgxIconModule } from "igniteui-angular";
import { ToastSample1Component
} from "../../src/app/notifications/toast/toast-sample-1/toast-sample-1.component";
import { ToastSample2Component
} from "../../src/app/notifications/toast/toast-sample-2/toast-sample-2.component";
import { ToastSample5Component
} from "../../src/app/notifications/toast/toast-sample-5/toast-sample-5.component";
import { ToastStyleComponent
} from "../../src/app/notifications/toast/toast-style/toast-style.component";
import { ToastSample3Component } from "../../src/app/notifications/toast/toast-sample-3/toast-sample-3.component"
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ToastConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // toast sample 1
        configs.push(new Config({
            component: ToastSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastSample1Component],
                ngDeclarations: [ToastSample1Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 2
        configs.push(new Config({
            component: ToastSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastSample2Component],
                ngDeclarations: [ToastSample2Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 3
        configs.push(new Config({
            component: ToastSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule, IgxIconModule,
                    IgxToastModule, ToastSample3Component],
                ngDeclarations: [ToastSample3Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxToastModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast sample 5
        configs.push(new Config({
            component: ToastSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastSample5Component],
                ngDeclarations: [ToastSample5Component],
                ngImports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule]
            }),
            shortenComponentPathBy: "/notifications/toast/"
        }));

        // toast style
        configs.push(new Config({
            component: ToastStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastStyleComponent],
                ngDeclarations: [ToastStyleComponent],
                ngImports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule]
            }),
            shortenComponentPathBy: "/notifications/toast/"
        }));

        return configs;
    }
}
