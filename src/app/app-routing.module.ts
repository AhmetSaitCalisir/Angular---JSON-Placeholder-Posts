import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PageMainComponent },
  { path: 'user/:id', component: PageUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
