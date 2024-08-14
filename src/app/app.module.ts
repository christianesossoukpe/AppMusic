import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
// import { ActivatedRoute } from '@angular/router';
import { InputPrinComponent } from './input-prin/input-prin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AsideComponent } from './aside/aside.component';
import { FormsModule } from '@angular/forms';
import { PaginateComponent } from './paginate/paginate.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormInscriptionComponent,
    InputPrinComponent,
    AccueilComponent,
    AsideComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
