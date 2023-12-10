import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
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
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwick', 'React']);
  public frameworks2 = signal([]);

  public selectButtons: { name: Grade }[] = [
    { name: 'A' },
    { name: 'B' },
    { name: 'F' },
  ];

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }

  public changeGrade(value: Grade) {
    this.grade.update((grade) => (grade = value));
  }
}
