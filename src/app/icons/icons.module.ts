import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDayModeComponent } from './components/icon-day-mode/icon-day-mode.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconEyeSlashComponent } from './components/icon-eye-slash/icon-eye-slash.component';
import { IconEyeComponent } from './components/icon-eye/icon-eye.component';
import { IconListClientsComponent } from './components/icon-list-clients/icon-list-clients.component';
import { IconListItemsComponent } from './components/icon-list-items/icon-list-items.component';
import { IconListUsersComponent } from './components/icon-list-users/icon-list-users.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconNightModeComponent } from './components/icon-night-mode/icon-night-mode.component';
import { IconPlusCircleComponent } from './components/icon-plus-circle/icon-plus-circle.component';

@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconListItemsComponent,
    IconListUsersComponent,
    IconListClientsComponent,
    IconDayModeComponent,
    IconNightModeComponent,
    IconEyeComponent,
    IconEyeSlashComponent,
    IconPlusCircleComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    IconDeleteComponent,
    IconEditComponent,
    IconListItemsComponent,
    IconListUsersComponent,
    IconListClientsComponent,
    IconDayModeComponent,
    IconNightModeComponent,
    IconEyeComponent,
    IconEyeSlashComponent,
    IconPlusCircleComponent,
  ],
})
export class IconsModule {}
