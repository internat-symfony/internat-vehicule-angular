import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { CarslistComponent } from './carslist/carslist.component'
import { OnecarComponent } from './onecar/onecar.component'
import { CreatecarComponent } from './createcar/createcar.component'
import { EditcarComponent } from './editcar/editcar.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: 'carlist', component: CarslistComponent },
  { path: 'cardetail/:id', component: OnecarComponent },
  { path: 'createcar', component: CreatecarComponent },
  { path: 'editcar/:id', component: EditcarComponent },
  { path: '', component: WelcomeComponent },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
