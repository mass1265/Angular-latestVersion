import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridconfigService {
  http = inject(HttpClient);

  getGridDataList() {
    return this.http.get('https://www.ag-grid.com/example-assets/space-mission-data.json')
  }
}
