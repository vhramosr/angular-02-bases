import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output("indexEliminado")
    public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power: 10
    }];


  DeletedCharacter(id?: string):void {
    if (!id) return;

    this.onDeleteId.emit(id);

  }
}
