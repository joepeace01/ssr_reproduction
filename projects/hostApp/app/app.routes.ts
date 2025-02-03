import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
      path: 'mfSolutionsV2',
      children: [
        {
          path: '',
          loadChildren: () => loadRemoteModule('mfSolutionsV2', './routes').then((m) => m.routes),
        },
      ],
    },
];
