import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadComponent } from './admin/file/file-upload/file-upload.component';


const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'about', component: AboutComponent },
          { path: 'test/:id', component: AboutComponent },
          { path: 'barcode', component: BarcodeComponent,  pathMatch: 'full' },
          { path: 'barcode/:company', component: BarcodeComponent,  pathMatch: 'full' },
          { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
          { path: 'login', component: LoginComponent },
          { path: 'file-upload', component: FileUploadComponent, canActivate: [AuthGuard]},
        ]
    },
    
    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'barcode', component: BarcodeComponent,  pathMatch: 'full' },
          { path: 'barcode/:company', component: BarcodeComponent },
          { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
          { path: 'file-upload', component: FileUploadComponent, canActivate: [AuthGuard]}
        ]
    },

    //no layout routes
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'barcode/:company', component: BarcodeComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: 'file-upload', component: FileUploadComponent, canActivate: [AuthGuard]},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash : true, enableTracing: true });


