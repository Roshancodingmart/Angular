import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
// import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { TableComponent } from './table/table.component';
import { MovieComponent } from './movie/movie.component';
const routes: Routes = [
      {path:'',component: SignupComponent},
      {path:'signup',component: SignupComponent},
      {path:'signin',component: SigninComponent},
      {path:'table',component:TableComponent},
      {path:'movie',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
