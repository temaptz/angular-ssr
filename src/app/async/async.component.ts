import { Component, OnInit } from '@angular/core';
import {AsyncService} from '../services/async.service';

@Component({
  selector: 'app-async-view',
  templateUrl: 'async.html'
})

export class AsyncComponent implements OnInit {
  public data: object[];

  constructor(private asyncService: AsyncService) {}

  ngOnInit() {
    this.asyncService
      .getData()
      .subscribe((data) => {
        this.data = data;
      });
  }
}
