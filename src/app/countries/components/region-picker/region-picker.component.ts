import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'countries-region-picker',
  templateUrl: './region-picker.component.html',
  styleUrl: './region-picker.component.css'
})
export class RegionPickerComponent {

  @Output()
  public onRegionSelected = new EventEmitter<string>();



  onChage(value: string) {
    this.onRegionSelected.emit(value);
  }

}
