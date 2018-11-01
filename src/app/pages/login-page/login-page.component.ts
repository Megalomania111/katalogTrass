import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

	mySecondReactiveForm: FormGroup;

	constructor(private fb: FormBuilder, private userService: UserService) { }

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
		this.userService.login(this.mySecondReactiveForm.value)
			.subscribe((r) => {
				console.log(r);
			});
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
