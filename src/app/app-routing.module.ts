import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { DateTimeSelectionComponent } from './date-time-selection/date-time-selection.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/event-selection', pathMatch: 'full' },
  { path: 'event-selection', component: EventSelectionComponent },
  { path: 'date-time-selection', component: DateTimeSelectionComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
