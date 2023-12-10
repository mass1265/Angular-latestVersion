import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class DefaultConfigService {
  getDefaultGridOptions(): ColDef {
    return {
      editable: true,
      resizable: true,
      filter: true,
      autoHeight: true,
      autoHeaderHeight: true,
      wrapText: true,
      // allow every column to be aggregated
      enableValue: false,
      // allow every column grouped
      enableRowGroup: false,
      // allow every coulmn pivoted
      enablePivot: false
    }
  }
}
