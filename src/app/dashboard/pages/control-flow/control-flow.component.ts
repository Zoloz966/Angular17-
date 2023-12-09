import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }
}