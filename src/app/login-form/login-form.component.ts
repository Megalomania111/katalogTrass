import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
	mySecondReactiveForm: FormGroup;

	constructor(private fb: FormBuilder) { }

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

		/** TODO: Обработка данных формы */
		console.log(this.mySecondReactiveForm.value);
	}

	isControlInvalid(controlName: string): boolean {
		const control = this.mySecondReactiveForm.controls[controlName];

		const result = control.invalid && control.touched;

		return result;
	}

	private initForm() {
		this.mySecondReactiveForm = this.fb.group({

			email: ['', [
				Validators.required, Validators.email
			]
			],
			password: ['', [
				Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
			]
			]
		});
	}

}