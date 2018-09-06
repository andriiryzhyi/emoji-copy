import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[appPopover]',
})

/**
  <span [appPopover]="popoverTrigger || 'Text'" popoverTitle="Title">Title</span>
  <app-popover-content #popoverTrigger>
    #HTML TEMPLATE
  </app-popover-content>
**/
export class PopoverDirective {
  @Input('appPopover')
  content: string | PopoverComponent;
  /*tslint:disable-next-line:no-input-rename*/
  @Input('popoverTitle')
  title: string;

  @Input()
  popoverDisabled: boolean;

  @Input()
  popoverAnimation = true;

  @Input()
  popoverPlacement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  private popover: ComponentRef<PopoverComponent>;
  private visible: boolean;

  constructor(private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    console.log(this.visible);
  }

  @HostListener('focusin')
  @HostListener('mouseenter')
  show(): void {
    if (this.popoverDisabled || this.visible) {
      return;
    }

    this.visible = true;
    if (typeof this.content === 'string') {
      const factory = this.resolver.resolveComponentFactory(PopoverComponent);
      if (!this.visible) {
        return;
      }

      this.popover = this.viewContainerRef.createComponent(factory);
      this.popover.instance.hostElement = this.viewContainerRef.element.nativeElement;
      this.popover.instance.content = this.content as string;
      this.popover.instance.title = this.title as string;
      this.popover.instance.placement = this.popoverPlacement;
      this.popover.instance.animation = this.popoverAnimation;
    } else {
      const popover = this.content as PopoverComponent;
      popover.hostElement = this.viewContainerRef.element.nativeElement;
      popover.title = this.title as string;
      popover.placement = this.popoverPlacement;
      popover.animation = this.popoverAnimation;
      popover.show();
    }
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  hide(): void {
    if (!this.visible) {
      return;
    }

    this.visible = false;
    if (this.popover) {
      this.popover.destroy();
    }

    if (this.content instanceof PopoverComponent) {
      (this.content as PopoverComponent).hide();
    }
  }
}
