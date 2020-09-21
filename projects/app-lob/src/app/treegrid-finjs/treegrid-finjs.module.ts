import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxExcelExporterService, IgxSliderModule,
    IgxSwitchModule, IgxTreeGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "../directives/prevent-scroll.directive";
import { LocalDataService } from "../grid-finjs/localData.service";
import { TreeGridFinJSComponent } from "./tree-grid-finjs-sample.component";
import { TreeGridGroupingPipe } from "./tree-grid-grouping.pipe";
import { TreeGridFinjsRoutingModule } from "./treegrid-finjs-routing.module";

@NgModule({
    declarations: [
        TreeGridFinJSComponent,
        TreeGridGroupingPipe
    ],
    imports: [
        CommonModule,
        IgxPreventDocumentScrollModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        TreeGridFinjsRoutingModule,
        IgxTreeGridModule
    ],
    providers: [LocalDataService, IgxExcelExporterService]
})
export class TreeGridFinjsModule {}
