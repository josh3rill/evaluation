/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxIconModule, IgxToggleModule, IgxTooltipModule } from "igniteui-angular";
import { TooltipRichComponent } from "../../src/app/interactions/tooltip/tooltip-rich/tooltip-rich.component";
import { TooltipSimpleComponent } from "../../src/app/interactions/tooltip/tooltip-simple/tooltip-simple.component";
import { TooltipStyleComponent } from "../../src/app/interactions/tooltip/tooltip-style/tooltip-style.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TooltipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Simple Tooltip Sample
        configs.push(new Config({
            component: TooltipSimpleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxAvatarModule,
                    IgxTooltipModule,
                    TooltipSimpleComponent
                ],
                ngDeclarations: [TooltipSimpleComponent],
                ngImports: [IgxAvatarModule, IgxTooltipModule]
            }),
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Rich Tooltip Sample
        configs.push(new Config({
            component: TooltipRichComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxAvatarModule,
                    IgxTooltipModule,
                    IgxIconModule,
                    TooltipRichComponent],
                ngDeclarations: [TooltipRichComponent],
                ngImports: [
                    IgxAvatarModule,
                    IgxTooltipModule,
                    IgxIconModule]
            }),
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Style Tooltip Sample
        configs.push(new Config({
            component: TooltipStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxAvatarModule,
                    IgxTooltipModule,
                    IgxToggleModule,
                    TooltipStyleComponent
                ],
                ngDeclarations: [TooltipStyleComponent],
                ngImports: [
                    IgxAvatarModule,
                    IgxTooltipModule,
                    IgxToggleModule
                ]
            }),
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        return configs;
    }
}
