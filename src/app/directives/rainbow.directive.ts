import { Poney } from './../interfaces/poney';
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[otoRainbow]'
})
export class RainbowDirective {

  @Input('otoRainbow') color: string
  @Input() hasColor: boolean
  @Input() poney: Poney
  timeoutId: any

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.hasColor) {
      this.el.nativeElement.style.background = this.color
    }
  }
  
  @HostListener('dblclick') handleDblclick(): void {
    if (this.poney.distance >= 90) {
      return
    }

    clearTimeout(this.timeoutId)

    this.poney.distance += 5

    this.poney.img = this.poney.img.replace('running', 'rainbow')
    
    this.timeoutId = setTimeout(() => {
      this.poney.img = this.poney.img.replace('rainbow', 'running')
    }, 1000)
  }
}
