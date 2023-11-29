import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/CountriesResponse';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries : ICountry[] = [];

  constructor(private countriesService: CountriesService) {
  }

  search(value: string) {

    // if(value==="") return;    

    this.countriesService.searchByCountries(value, "region")
      .subscribe(r => {
        this.countries = r;
      })
  }
}
