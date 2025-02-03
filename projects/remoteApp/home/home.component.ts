import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterOutlet, RouterModule, CommonModule],
})
export class HomeComponent {

  title: string = 'mfe-evenemaent';
  users = [];

  #userService = inject(UserService);
  users$ = this.#userService.getUsers();

   doStuff() {
    alert('Hallo Welt!');
  }
}

export default HomeComponent;

