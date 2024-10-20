import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { DietPlanComponent } from './diet-plan/diet-plan.component'
import { MedicineAnalysisComponent } from './medicine-analysis/medicine-analysis.component'
import { SymptomMonitoringComponent } from './symptom-monitoring/symptom-monitoring.component'
import { DoctorInteractionComponent } from './doctor-interaction/doctor-interaction.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    DietPlanComponent,
    MedicineAnalysisComponent,
    SymptomMonitoringComponent,
    DoctorInteractionComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}