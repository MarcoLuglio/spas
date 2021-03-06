import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesComponent } from './components/languages.component';
import { TimelineComponent } from './components/timeline/timeline.component';



@NgModule({
	declarations: [LanguagesComponent, TimelineComponent],
	imports: [
		CommonModule,
		LanguagesRoutingModule
	]
})
export class LanguagesModule { }
