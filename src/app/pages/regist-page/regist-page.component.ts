import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-regist-page',
  templateUrl: './regist-page.component.html',
  styleUrls: ['./regist-page.component.sass']
})
export class RegistPageComponent implements OnInit {

  myFirstReactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;

    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }


    this.userService.register(this.myFirstReactiveForm.value)
      .subscribe((r) => {
        console.log(r);
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.myFirstReactiveForm = this.fb.group({
      firstName: ['', [
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)
      ]
      ],
      lastName: ['', [
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email
      ]
      ],
      password: ['', [
        Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
      ]
      ],
      repeartPssword: ['', [
        Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
      ]
      ]
    });
  }
}
