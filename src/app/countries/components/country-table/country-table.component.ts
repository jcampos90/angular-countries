import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/CountriesResponse';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  public countries :  ICountry[] = [];

  


}
