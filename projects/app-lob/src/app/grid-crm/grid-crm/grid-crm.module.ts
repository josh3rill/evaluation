import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxCsvExporterService, IgxExcelExporterService,
    IgxGridModule, IgxProgressBarModule
} from "igniteui-angular";
import { IgxSparklineCoreModule, IgxSparklineModule } from "igniteui-angular-charts";
import { IgxPreventDocumentScrollModule } from "../../directives/prevent-scroll.directive";
import { GridCRMRoutingModule } from "./grid-crm-routing.module";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";

@NgModule({
    declarations: [
        GridCRMComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        GridCRMRoutingModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxProgressBarModule,
        IgxSparklineModule,
        IgxSparklineCoreModule
    ],
    providers: [IgxCsvExporterService, IgxExcelExporterService]
})
export class GridCRMModule { }
