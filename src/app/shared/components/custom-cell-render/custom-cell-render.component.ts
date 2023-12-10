import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-cell-render',
  standalone: true,
  imports: [],
  template: `
    <p>
       {{ value }}
    </p>
  `,
  styles: ``
})
export class CustomCellRenderComponent implements ICellRendererAngularComp {

  value: any;
  agInit(params: ICellRendererParams): void {
    console.log(params.data, 'test');
    this.value = params.value;

  }
    
  refresh(params: ICellRendererParams): boolean {
     return false;
  }

}
