import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistPageComponent } from './pages/regist-page/regist-page.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { from } from 'rxjs';
import { TrasaComponent } from './trasa/trasa.component';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'regist', component: RegistPageComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		LoginPageComponent,
		RegistPageComponent,
		PagesComponent,
		NavbarComponent,
		TrasaComponent

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MaterialAppModule,
		HttpModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
