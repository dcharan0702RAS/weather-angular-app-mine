import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, WeatherInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// @NgModule({
//   declarations: [AppComponent],
//   imports: [,// Add FormsModule to the imports array],
//   providers: [],
//   bootstrap: [AppComponent],
// })
export class AppComponent {
  title = 'weather-angular-app-mine';
}
