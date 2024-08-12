import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormComponent } from './form/form.component';
import { InputPrinComponent } from './input-prin/input-prin.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:AccueilComponent},
  {path:'app-form',component:FormComponent},
  {path:'app-form-inscription',component:FormInscriptionComponent},
  {path:'app-input-prin',component:InputPrinComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
