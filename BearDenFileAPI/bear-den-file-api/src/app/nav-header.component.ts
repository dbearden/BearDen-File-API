import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html'
})
export class NavHeaderComponent {
  @Input() title: string;
}
