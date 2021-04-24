import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouletteRoutingModule } from './roulette-routing.module';
import { RouletteComponent } from './roulette.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RouletteComponent
  ],
  imports: [
    CommonModule,
    RouletteRoutingModule,
    HttpClientModule,
    RouterModule, 
    SharedModule
  ]
})
export class RouletteModule { }
