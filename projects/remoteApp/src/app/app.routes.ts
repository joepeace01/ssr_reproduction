import { provideHttpClient, withFetch } from '@angular/common/http';
import { Routes } from '@angular/router';
import HomeComponent from 'src/core/home/home.component';
import { UserService } from 'src/services/user.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [provideHttpClient(withFetch()), UserService]
  }
];
