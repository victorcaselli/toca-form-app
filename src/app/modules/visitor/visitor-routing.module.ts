import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {VisitorComponent} from "./visitor.component";

const routes: Routes = [
  {
    path:"",
    component: VisitorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule{}
