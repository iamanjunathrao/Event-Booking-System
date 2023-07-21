import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { DateTimeSelectionComponent } from './date-time-selection/date-time-selection.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [
    AppComponent,
    EventSelectionComponent,
    DateTimeSelectionComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    BsDatepickerModule.forRoot() // Add BsDatepickerModule here
  ],
  providers: [BsDatepickerConfig], // Add BsDatepickerConfig to providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
