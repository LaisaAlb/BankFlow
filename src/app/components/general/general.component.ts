import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  data$: Observable<Data> = of({});
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.data$ = this._activatedRoute.data;
  }
}
