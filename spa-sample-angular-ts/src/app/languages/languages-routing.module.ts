import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './components/languages.component';



const routes: Routes = [
	{ path: '', component: LanguagesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LanguagesRoutingModule { }
