import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private pokService: PokemonService) { }

  ngOnInit(): void {
    this.getPoke(); 
  }

  getPoke(){
    for(let i = 1; i<200; i++){
      this.pokService.getPokemons(i).subscribe(
        res => {
          console.log(res);
        },
        err => {
          
        }
      )
    }
  }

}
