import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab2Page
      }
    ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}