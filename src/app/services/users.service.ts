import { Injectable, signal } from '@angular/core';
import { User } from '@request-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<State>({ loading: true, users: [] });

  constructor() {
    console.log('Cargado data');

  }
}
