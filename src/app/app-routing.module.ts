import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'formacao',component:FormacaoComponent},
  {path: 'contato',component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
