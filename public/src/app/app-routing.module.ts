import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'quotes/:id', component: QuotesComponent},
  { path: 'create_quote/:id', component: CreateQuoteComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  // { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
