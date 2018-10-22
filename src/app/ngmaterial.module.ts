import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule } from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
	imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCardModule],
	exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCardModule]
})
export class MaterialAppModule { }