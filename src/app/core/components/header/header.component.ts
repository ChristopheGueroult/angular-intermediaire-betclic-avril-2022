import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { FontsizeService } from '../../services/fontsize.service';
// import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * this property is boolean to activ or deactive night mode
   * default is true whit day mode
   */
  public modeDay = true;
  public user$!: Subject<User | null>;
  constructor(
    private authService: AuthService,
    private fontsizeService: FontsizeService
  ) {
    this.user$ = this.authService.user$;
  }

  public biggerSize() {
    this.fontsizeService.biggerSize();
  }
  public normalSize() {
    this.fontsizeService.normalSize();
  }

  ngOnInit(): void {}
  /**
   * @funcrtion
   * this function is used to toggle day/night mode
   */
  public toggleMode(): void {
    if (this.modeDay) {
      document.documentElement.style.setProperty(
        '--app-light',
        'rgb(201, 200, 200)'
      );
      document.documentElement.style.setProperty(
        '--app-darklight',
        'rgb(177, 176, 176)'
      );
      document.documentElement.style.setProperty(
        '--app-secondary',
        'rgb(80, 80, 80)'
      );
      this.modeDay = !this.modeDay;
    } else {
      document.documentElement.style.setProperty(
        '--app-light',
        'rgb(255, 255, 255)'
      );
      document.documentElement.style.setProperty(
        '--app-secondary',
        'rgb(197, 197, 197)'
      );
      document.documentElement.style.setProperty(
        '--app-darklight',
        'rgb(230, 230, 230)'
      );
      this.modeDay = !this.modeDay;
    }
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
