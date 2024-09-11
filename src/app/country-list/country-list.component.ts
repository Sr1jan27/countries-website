import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  selector:   
 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  regions: ["Africa",  "America", "Asia", "Europe", "Oceania"] | undefined
  countries: Country[] = [];

  constructor(private countryService:   
 CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;   

    });
  }

  onRegionChange(): void {
    console.log("filter by region clicked");
    
    // if (region) {
    //   this.filteredCountries = this.countries.filter(country => country.region === region);
    // } else {
    //   this.filteredCountries = this.countries;
    // }
  }
}