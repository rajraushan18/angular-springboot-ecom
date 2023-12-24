import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  adresses= [1,1,1,1];
  myForm:FormGroup=this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobile: ['', Validators.required],
  })

  constructor(private formBuilder:FormBuilder){

  }

  handleCreateOrder(item:any){
    
  }


  handleSubmit = () => {
    const formValue = this.myForm.value;
    const reqData = formValue;
    this.handleCreateOrder(reqData)
    console.log(formValue)
    // this.store.dispatch(createOrderRequest({ reqData }));
    
  };


}
