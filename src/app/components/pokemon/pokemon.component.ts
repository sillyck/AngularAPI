import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: any;

  constructor(private pokService: PokemonService) { }

  ngOnInit(): void {
    this.pokService.getPokemon(this.pokemon.name).subscribe()
  }

}
