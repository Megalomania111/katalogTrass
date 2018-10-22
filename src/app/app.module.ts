import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
	declarations: [
		AppComponent,
		LoginFormComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MaterialAppModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
