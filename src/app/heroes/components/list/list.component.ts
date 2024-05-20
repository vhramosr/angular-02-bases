import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nombreHeroes: string[] = ['Carlos Marx', 'José Stalin','Vladimir Lenin', 'León Trotsky', 'Ernesto "Che" Guevara'];
  public heroeBorrado?:string;


  borrarUltimoHeroe():void {
     this.heroeBorrado = this.nombreHeroes.pop();
  }

}
