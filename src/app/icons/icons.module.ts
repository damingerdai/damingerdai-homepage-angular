import { NgModule } from '@angular/core';
import { SunIconComponent } from './sun-icon';
import { MoonIconComponent } from './moon-icon';

@NgModule({
  declarations: [],
  imports: [SunIconComponent, MoonIconComponent],
  exports: [SunIconComponent, MoonIconComponent],
})
export class IconsModule {}
