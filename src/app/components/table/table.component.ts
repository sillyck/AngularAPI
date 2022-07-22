import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pokemonInfo: any[];

  
  constructor(private pokService: PokemonService) {
    this.pokemonInfo = [];
  }

  ngOnInit(): void {
    
    this.getPoke(); 
  }

  getPoke(){

    this.pokService.getPokemons().subscribe(
      res => {
        this.pokemonInfo = res.results;
        console.log(res.results);
      },
      err => {
        console.log(err)
      }
    )
  }

}
