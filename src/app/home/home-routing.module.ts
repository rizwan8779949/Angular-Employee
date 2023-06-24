import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SideNavComponent } from "./side-nav/side-nav.component";
const routes: Routes = [
    
    { 
        path: "",
        component: SideNavComponent,
        children: [  
            {
                path: "",
                redirectTo:'dashboard',
                pathMatch:"full"
            },  
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
              },
            {
                path: 'employee',
                loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule),
              },
        ]
    }
];        

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
