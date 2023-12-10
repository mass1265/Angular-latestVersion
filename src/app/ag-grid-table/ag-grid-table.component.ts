import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';
import { catchError, delay, tap, EMPTY } from 'rxjs';

import { GridconfigService } from '../services/grid-config-service/gridconfig.service';
import { IGridInterface } from '../shared/Interfaces/gridConfig';
import { DefaultConfigService } from '../shared/services/default-config-service/default-config.service';
import { CustomCellRenderComponent } from '../shared/components/custom-cell-render/custom-cell-render.component';

@Component({
  selector: 'app-ag-grid-table',
  standalone: true,
  imports: [AgGridModule, HttpClientModule, CommonModule],
  providers: [GridconfigService, DefaultConfigService],
  templateUrl: './ag-grid-table.component.html',
  styleUrl: './ag-grid-table.component.scss'
})
export class AgGridTableComponent implements OnInit {

  rowData!: IGridInterface;
  colDefs: ColDef[] = [];
  defaultColDef!: ColDef;
  gridApi!: GridApi;

  service = inject(GridconfigService);
  configService = inject(DefaultConfigService)


  ngOnInit(): void {
    this.service.getGridDataList().pipe(
      tap(() => {

      }), delay(0),
      tap(() => {
        // after some time display or hide the data then we can use here
      }),
      catchError((err) => {
        console.log(err);
        // some error messages declared here
        return EMPTY;
      })
    ).subscribe((res: any) => {
      this.rowData = res;
    })

    // Column Definitions: Defines & controls grid columns.
    this.colDefs = [
      { field: 'mission', width:380 },
      { field: 'company' },
      { field: 'location', width:450 },
      { field: 'date',cellRenderer: CustomCellRenderComponent },
      { field: 'price', 
        valueFormatter: (params: ValueFormatterParams) => {
          return '₹' + params.value.toLocaleString();
        }
      },
      { field: 'successful' },
      { field: 'rocket' },
    ];

    this.defaultColDef = this.configService.getDefaultGridOptions();
  }

  onGridReady(event: GridReadyEvent) {
    this.gridApi = event.api
  }
}
