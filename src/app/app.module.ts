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
import { UserService } from './user.service';
import { TrailsService } from './trails.service';

import { TrasaComponent } from './trasa/trasa.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NewTrasaPageComponent } from './pages/new-trasa-page/new-trasa-page.component';
import { SerchTrasaComponent } from './serch-trasa/serch-trasa.component';
import { TrasaPageComponent } from './pages/trasa-page/trasa-page.component';



const Routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'regist', component: RegistPageComponent },
  { path: 'trasa/new', component: NewTrasaPageComponent },
  { path: 'trasa/:id', component: TrasaPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistPageComponent,
    PagesComponent,
    NavbarComponent,
    TrasaComponent,
    NewTrasaPageComponent,
    SerchTrasaComponent,
    TrasaPageComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialAppModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      Routes,
      { enableTracing: true }
    )
  ],
  providers: [UserService, TrailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
