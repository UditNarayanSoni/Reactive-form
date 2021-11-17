import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  list:any[] = [];

  getList(){
    return this.list;
  }

  ngOnInit(): void {
  }

}
