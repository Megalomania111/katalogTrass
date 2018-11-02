import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrailsService } from 'src/app/trails.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-trasa',
  templateUrl: './new-trasa-page.component.html',
  styleUrls: ['./new-trasa-page.component.sass']
})
export class NewTrasaPageComponent implements OnInit {
  trail = {
    title: '',
    number: '',
    viaPoints: '',
    trackColor: '',
  };

  mySecondReactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private trailsService: TrailsService, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.mySecondReactiveForm.controls;

    if (this.mySecondReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }


    console.log(this.mySecondReactiveForm.value);
    console.log(this.userService.currentUser.token);
    this.trailsService.createTrail(this.trail, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZWFzZDEyM0BnbWFpbC5jb20iLCJpYXQiOjE1NDEwOTk3MTYsImV4cCI6MTU0MTE4NjExNn0.cjff1YBbSLyNtwqdyW5NS6uWlMDyrIm8a_yK3G33Lo8')
      .subscribe((res) => {
        console.log(res);
      });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.mySecondReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.mySecondReactiveForm = this.fb.group({
      title: ['', [
        Validators.required,
      ]
      ],
      number: ['', [
        Validators.required,
      ]
      ],
      viaPoints: ['', [
        Validators.required,
      ]
      ],
      trackColor: ['', [
        Validators.required,
      ]
      ],
    });
  }
}
