import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TrasaComponent } from '../trasa/trasa.component';
import { TrailsService } from '../trails.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-serch-trasa',
  templateUrl: './serch-trasa.component.html',
  styleUrls: ['./serch-trasa.component.sass']
})
export class SerchTrasaComponent implements OnInit {
  trails$: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(private trailsService: TrailsService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.trails$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.trailsService.searchTrails(term)),
    );
  }
}
