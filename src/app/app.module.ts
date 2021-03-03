import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { ReporterComponent } from './reporter/reporter.component';
import { AppRoutingModule } from './app-routing.module';
import { RegionComponent } from './region/region.component';
import {MatCardModule} from '@angular/material/card';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { UserNewsComponent } from './user-news/user-news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ReporterComponent,
    RegionComponent,
    AnonymousComponent,
    UserNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent,SignUpComponent]
})
export class AppModule { }
