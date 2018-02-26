import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MetaComponent } from './meta.component';
import { AsyncService } from '../services/async.service';

@NgModule({
  declarations: [MetaComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MetaComponent,
        pathMatch: 'full'
      }
    ]),
    CommonModule
  ],
  providers: [AsyncService]
})
export class MetaModule {}
