import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopemployeeListComponent } from './topemployee-list/topemployee-list.component';

@NgModule({
  declarations: [DashboardComponent, TopemployeeListComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
}) 
export class DashboardModule {}
