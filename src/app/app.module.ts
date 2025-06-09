import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './animal-form.component';
import { PhoneValidatorDirective } from './custom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
