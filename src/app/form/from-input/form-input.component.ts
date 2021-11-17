import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [FormServiceService]
})
export class FormInputComponent implements OnInit {

  public fg : FormGroup;
  constructor(private fb: FormBuilder, private fservice:FormServiceService) {
    this.fg = fb.group({ 
    name: ['Udit Narayan', [Validators.required, Validators.pattern('[a-z A-Z]+$')]], 
    email: ['udit@gmail.com', [Validators.required, Validators.email]],
    password: ['hello@123', [Validators.required, Validators.minLength(8)]]
    });
  }
  arr: any[] = [];
  editIndex = 0;
  clicked = true;

  getArr(){
    this.arr = this.fservice.getList();
  }

  // To get validation we need to get() 
  get name(){
    return this.fg.get('name');
  }
  get email(){
    return this.fg.get('email');
  }
  get password(){
    return this.fg.get('password');
  }
  
  // Handle the Add data
  handleAdd(val: any){
    this.arr.push({id:this.arr.length, name: val});
    // if((val.name != val.name && val.email != val.email && val.password != val.password)){
      //   this.arr.push({id:this.arr.length, name: val});
    // }else {
    //   console.log("This is duplicate value");
    // }
    this.fg.reset();
    console.log(val);
  }

  // Handle the Remove data
  handleRemove(id: number){
    this.arr = this.arr.filter((item)=>item.id!=id);
    // console.log(id);
  }
  
  // Handle the Edit data
  handleEdit(data: any, id: number){
    this.editIndex = id;
    this.fg.setValue({
      name: data.name,
      email: data.email,
      password: data.password
    })
    this.clicked = false; 
    console.log(this.clicked);
  }
  
  handleUpdate(val: any){
    // console.log(this.editIndex);
    this.arr.find((data) => {
      if(data.name != val && data.id == this.editIndex){
        data.name =  val;
      }
    });
    console.log(val);
    this.clicked = true;
    this.fg.reset();
    console.log(this.clicked);
  }

  ngOnInit(): void {
  }  
}
