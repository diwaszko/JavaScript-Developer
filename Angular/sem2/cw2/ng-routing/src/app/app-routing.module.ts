import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';


const routes: Routes = [
  { path: '', redirectTo: 'rectangle', pathMatch: 'full' },  // gdy sciezka bedzie pusta przekieruj na /rectangle
  { path: 'rectangle', component: RectangleComponent },
  { path: 'circle', component: CircleComponent },
  { path: 'triangle', component: TriangleComponent },
  { path: '**', redirectTo: 'triangle' }                     // gdy bledy adres (404) to przekieruje do tirangle
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true                                      // w consoli jest podglad co sie dzieje (sledzi routing)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
