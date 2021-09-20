import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';

const routes: Routes = [

  {path:'getall', component:GetAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
