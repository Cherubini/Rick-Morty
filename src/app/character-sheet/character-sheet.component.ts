import { Component, Input } from '@angular/core';
import { Result } from 'src/models/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {

  @Input() character?:Result;

}
