import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherInfoComponent } from '../weather-info/weather-info.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    WeatherInfoComponent,
    CommonModule,
  ],
  providers: [WeatherService],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  constructor(
    private weatherService: WeatherService,
    private httpClient: HttpClient
  ) {}
  title = 'weather-angular-app-mine';
  cityName: string = '';

  weatherData?: any;

  search() {
    console.log(new Date());

    this.weatherService
      .getWeatherData(this.cityName, this.httpClient)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.weatherData = response;
          console.log(this.weatherData);
        },
        error: (err) => {
          console.log(err);
          if (err.status === 404) {
            alert(err.error['message'].toLowerCase());
          }
        },
      });
    this.cityName = '';
  }
}
