import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class UsersComponent {}
