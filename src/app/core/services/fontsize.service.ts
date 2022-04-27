import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FontsizeService {
  public bigSize$ = new BehaviorSubject<boolean>(false);
  constructor() {}
  public biggerSize() {
    this.bigSize$.next(true);
  }
  public normalSize() {
    this.bigSize$.next(false);
  }
}
