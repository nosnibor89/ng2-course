import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  ngOnInit() {
    console.log(this.templateRef);
    console.log(this.vcRef);
  }

}
