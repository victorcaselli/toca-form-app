import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DiscipleListComponent} from "./disciple-list.component";

const routes: Routes = [
  {
    path:"",
    component: DiscipleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscipleListRoutingModule { }
