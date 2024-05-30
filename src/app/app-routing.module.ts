
import { NgModule } from '@angular/core';


import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'view', component: ViewComponent }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
