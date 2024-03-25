import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleComponentComponent } from './second-module-component/second-module-component.component';


@NgModule({
  declarations: [
    SecondModuleComponentComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
