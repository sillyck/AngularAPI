import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  pokemonInfo: any[];
  numPokemons = 40;
  bol = false;
  pokeData: any;
  
  constructor(private pokService: PokemonService) {
    this.pokemonInfo = [];
  }

  ngOnInit(): void {
    this.getPoke(); 
  }

  getPoke(){
    for (let i = 1; i <= this.numPokemons; i++){
      this.pokService.getPokemons(i).subscribe(
        res => {
          // console.log(res);
          this.pokeData = {
            position: res.id,
            name: res.name,
            image: res.sprites.front_default,
            type1: res.types[0].type.name
          }
          this.pokemonInfo.push(this.pokeData);
        },
        error => {
          console.log(error)
        }
      )
    }
  }

  shiny(id){
    console.log("Shiny!")
    // this.pokService.getPokemons(id).subscribe(
    //   res => {
    //     this.pokemonInfo.map(function(valor){
    //       this.pokeData = {
    //         image: res.sprites.front_shiny
    //       }
    //     })
    //     this.pokemonInfo.push(this.pokeData);
    //   },error => {
    //     console.log(error)
    //   }
    // )
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
