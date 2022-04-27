import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { Subject } from 'rxjs';
import { FontsizeService } from './core/services/fontsize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public bigSize$: Subject<boolean>;
  constructor(private fontsizeService: FontsizeService) {
    this.bigSize$ = this.fontsizeService.bigSize$;
  }
  public title = 'crm-nov-bis';
  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll');
  }

  check() {
    console.log('CD APP');
  }
}
