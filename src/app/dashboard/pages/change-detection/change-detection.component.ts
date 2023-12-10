import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre>Signal: {{ frameworkAsSignal() | json }}</pre>
    <pre>Property: {{ frameworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({ name: 'Angular', relaseDate: 2016 });
  public frameworkAsProperty = { name: 'Angular', relaseDate: 2016 };

  constructor() {
    setTimeout(() => {
      console.log('Hecho');
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({ ...value, name: 'React' }));
      // this.frameworkAsSignal.update((value) => {
      //   value.name = 'React';
      //   return { ...value };
      // });
    }, 3000);
  }
}
