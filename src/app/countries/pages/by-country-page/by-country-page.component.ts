import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/CountriesResponse';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries : ICountry[] = [];

  constructor(private countriesService: CountriesService) {
  }

  search(value: string) {

    this.countriesService.searchByCountries(value, "name")
      .subscribe(r => {
        this.countries = r;
      })
  }
}
