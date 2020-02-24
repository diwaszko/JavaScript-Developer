import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-registration',
  templateUrl: './react-registration.component.html',
  styleUrls: ['./react-registration.component.css']
})
export class ReactRegistrationComponent implements OnInit {

  myFormGroup = new FormGroup({
    firstName: new FormControl('Daniel', Validators.required),
    lastName: new FormControl('Iwaszko', Validators.required),
    email: new FormControl('email@email.pl', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('123456789', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    sex: new FormControl('0', Validators.required),
  });

  constructor() { }

  ngOnInit() {
    this.myFormGroup.valueChanges.subscribe((value => console.log(value)));
    this.myFormGroup.get('firstName').setValue('test');
  }
  register() {
    if (this.myFormGroup.valid) {
      console.log(this.myFormGroup.value);
    }
  }
}
