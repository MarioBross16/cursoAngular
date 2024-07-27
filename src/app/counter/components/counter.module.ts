import { NgModule } from "@angular/core";
import { CounterComponent } from "./conter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}
