import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask, NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    FormsModule
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  providers: [
    provideNgxMask(),
    provideEnvironmentNgxMask()
  ]
})
export class SharedModule { }
