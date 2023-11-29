import { Component } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {ICountry} from "../../interfaces/CountriesResponse";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries : ICountry[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByCapital(value: string) {

    this.countriesService.searchByCountries(value, "capital")
      .subscribe(r => {
        this.countries = r;
      })
  }

}
