import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SavingsComponent } from './savings/savings.component';
import { LoansComponent } from './loans/loans.component';
import { PaymentsSavingsComponent } from './payments-savings/payments-savings.component';
import { LoanPaymentsComponent } from './loan-payments/loan-payments.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SavingsComponent,
    LoansComponent,
    PaymentsSavingsComponent,
    LoanPaymentsComponent,
    WithdrawalsComponent,
    ReportsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
