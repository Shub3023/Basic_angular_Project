import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from '../src/app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent,{
  providers: [
    provideAnimations(),provideRouter(routes)
  ]

})
  .catch(err => console.error(err));
