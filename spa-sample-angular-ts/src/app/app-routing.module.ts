import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
	{
		path: 'languages',
		loadChildren: () => import('./languages/languages.module').then(m => m.LanguagesModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
