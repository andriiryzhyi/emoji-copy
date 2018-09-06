import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { PopoverDirective } from './popover.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverComponent, PopoverDirective],
  exports: [PopoverDirective, PopoverComponent],
  entryComponents: [PopoverComponent],
})
export class PopoverModule {}
