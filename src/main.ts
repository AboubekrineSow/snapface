import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import "@angular/compiler";  //here

import { AppModule } from './app/app.module';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(fr.default);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
