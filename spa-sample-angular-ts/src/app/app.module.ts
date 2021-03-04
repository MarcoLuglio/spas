import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
