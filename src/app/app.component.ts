import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userService = inject(UserService);
  users$: Observable<User[]> = this.userService.getUsers();

  ngOnInit() { }
}