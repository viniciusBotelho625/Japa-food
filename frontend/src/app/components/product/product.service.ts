import { Injectable } from '@angular/core';
import { read } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

    read(): Observable< {

    }
  }
}
