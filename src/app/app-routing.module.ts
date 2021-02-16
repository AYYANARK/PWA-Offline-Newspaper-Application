import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReporterComponent } from './reporter/reporter.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'reporter', component: ReporterComponent  },
  {path:'sign', component:SignUpComponent},
  {path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
