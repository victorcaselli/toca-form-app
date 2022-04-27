import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {VisitorListComponent} from "./visitor-list.component";

const routes: Routes = [
  {
    path:"",
    component: VisitorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule{}
