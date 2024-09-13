import { Component, OnInit } from '@angular/core';
import { Country } from '../country-service/country';
import { CountryService } from '../country-service/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  regions: string[] = ["Africa", "Americas", "Antarctic Ocean", "Asia", "Europe", "Oceania", "Polar"];
  countries: Country[] = [];
  AllCountries: Country[] = [];
  selectedCountry: any = null;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;   
      this.AllCountries = data;
    });
  }

  onRegionChange(event: Event): void {

  const selectedRegion = (event.target as HTMLSelectElement).value;

  if(selectedRegion){
    this.countries = this.AllCountries.filter(country => country.region === selectedRegion);
  }else {
    this.countries = this.AllCountries;
  }
  console.log("clicked");
  }
}
