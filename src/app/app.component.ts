import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TheBasic';

  infoFeature: string = 'recipe';

  onNavigate(feature: string) {
    this.infoFeature = feature;
  }
}
