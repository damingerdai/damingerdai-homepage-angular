import { NgModule } from '@angular/core';
import { SunIconComponent } from './sun-icon/sun-icon.component';
import { MoonIconComponent } from './moon-icon/moon-icon.component';

@NgModule({
  declarations: [],
  imports: [SunIconComponent, MoonIconComponent],
  exports: [SunIconComponent, MoonIconComponent],
})
export class IconsModule {}
