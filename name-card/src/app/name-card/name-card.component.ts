import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css'],
})
export class NameCardComponent {
  @Input() cardName: string | undefined;
  @Input() email: string | undefined;
  @Input() phone: string | undefined;

  constructor() {}

  ngOnInit() {}
}
