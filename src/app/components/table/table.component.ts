import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  pokemonInfo: any[];
  numPokemons = 20;
  
  constructor(private pokService: PokemonService) {
    this.pokemonInfo = [];
  }

  ngOnInit(): void {
    this.getPoke(); 
  }

  getPoke(){
    let pokeData;

    for (let i = 1; i <= this.numPokemons; i++){
      this.pokService.getPokemons(i).subscribe(
        res => {
          console.log(res);
          pokeData = {
            position: res.id,
            name: res.name,
            image: res.sprites.front_default,
            imageShiny: res.sprites.front_shiny
          }
          this.pokemonInfo.push(pokeData);
        },
        error => {
          console.log(error)
        }
      )
    }
  }

  bubbleSort(){
    var i, j;
    for (i = 0; i < this.numPokemons-1; i++){
        for (j = 0; j < this.numPokemons-i-1; j++){
            if (this.pokemonInfo[j].position > this.pokemonInfo[j+1].position){
              this.swap(this.pokemonInfo,j,j+1);
            }
        }
    }
  }

  swap(arr: any[], x: number, y: number){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
}
