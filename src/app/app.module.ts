import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './template-driven-form/animal-form.component';
import { UserFormComponent } from './reactive-form/user-form.component';
import { PhoneValidatorDirective } from './validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
