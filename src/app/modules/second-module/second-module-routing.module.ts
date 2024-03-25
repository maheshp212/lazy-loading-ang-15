import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondModuleComponentComponent } from './second-module-component/second-module-component.component';

const routes: Routes = [{ path: '', component: SecondModuleComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
