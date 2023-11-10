// configura el enrutado para routes.ts
import { provideRouter } from '@angular/router';
//Importa las rutas de la web en routes.ts
import routeConfig from './app/routes';

import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// configura el enrutado para routes.ts
bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));