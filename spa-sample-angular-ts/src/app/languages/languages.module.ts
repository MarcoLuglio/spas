import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesComponent } from './languages.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
	declarations: [LanguagesComponent, TimelineComponent],
	imports: [
		CommonModule,
		LanguagesRoutingModule
	]
})
export class LanguagesModule { }
