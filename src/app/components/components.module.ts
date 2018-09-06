import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule
  ],
  declarations: [

  ],
  exports: [
    PopoverModule
  ]
})
export class ComponentsModule { }
