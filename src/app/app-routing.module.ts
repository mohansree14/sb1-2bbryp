import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { DietPlanComponent } from './diet-plan/diet-plan.component'
import { MedicineAnalysisComponent } from './medicine-analysis/medicine-analysis.component'
import { SymptomMonitoringComponent } from './symptom-monitoring/symptom-monitoring.component'
import { DoctorInteractionComponent } from './doctor-interaction/doctor-interaction.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'diet-plan', component: DietPlanComponent },
  { path: 'medicine-analysis', component: MedicineAnalysisComponent },
  { path: 'symptom-monitoring', component: SymptomMonitoringComponent },
  { path: 'doctor-interaction', component: DoctorInteractionComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}