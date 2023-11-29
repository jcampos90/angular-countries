import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  @Input()
  public placeholder: string = "";

  @Output()
  public onSearch : EventEmitter<string> = new EventEmitter();

  search(value: string) {
     this.onSearch.emit(value);
  }
}
