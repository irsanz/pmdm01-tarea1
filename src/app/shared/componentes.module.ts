
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './header-tab/header-tab.component';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from './explore-container/explore-container.component';


@NgModule({
  declarations: [HeaderTabComponent,
    ExploreContainerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,   
  ],
  exports: [
    HeaderTabComponent,
    ExploreContainerComponent
  ]
})
export class ComponentesModule { }
