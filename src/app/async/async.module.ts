import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async.component';
import { AsyncService } from '../services/async.service';

@NgModule({
  declarations: [AsyncComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AsyncComponent,
        pathMatch: 'full'
      }
    ]),
    CommonModule
  ],
  providers: [AsyncService]
})
export class AsyncModule {}
