import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CostumDirDirective {
  @HostBinding('style.backgroundColor') bg ="white";
  @HostBinding('style.color') txtcolor= "black";
  @HostListener('mouseenter') mouseenter(){
    this.bg ="grey"
    this.txtcolor="white"
  }

  @HostListener('mouseleave') mouseleave(){
    this.bg="white"
    this.txtcolor="black"
  }

  constructor() { }

}
