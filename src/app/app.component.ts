import { Component } from '@angular/core';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breadcrumb';

  public disableBreadcrumbItem(args: BreadcrumbBeforeItemRenderEventArgs): void {
    if(args.item.text !== 'Program Files'){
      args.item.disabled = true;
    }

  }
  
  public appendIconClass(args: BreadcrumbBeforeItemRenderEventArgs): void {
    if(args.item.text !== ''){
      args.element.classList.add('e-icon-right');
    }
  }
}
