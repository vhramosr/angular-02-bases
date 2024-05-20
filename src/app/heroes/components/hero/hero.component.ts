import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'lenin';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Trostky'
  }
  changeAge(){
    this.age = 55;
  }

  resetForm(): void {
   this.name = 'lenin';
   this.age = 45;
  }
}
