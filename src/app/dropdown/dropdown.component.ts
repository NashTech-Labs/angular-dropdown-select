import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  dropDownData: DropdownDetailsModel = {
    options: ['option1', 'option2', 'option3', 'option4'],
    required: true,
  };
  actionId!: string;
  actionType!: number;
  allowMultiSelections = true;
  entries!: number;
  select: FormControl = new FormControl();
  options: string[] = [];

  ngOnInit(): void {
    this.select = new FormControl([]);
    if (this.dropDownData.required) {
      this.select.setValidators(Validators.required);
    }
  }

  checkBoxSelec(): void{
    this.allowMultiSelections = !this.allowMultiSelections;
  }

  onSelectItemFromDropdown(): void {
    this.options =
      typeof this.select.value === 'string'
        ? [this.select.value]
        : this.select.value;
  }
}

export interface DropdownDetailsModel {
  options: string[];
  required: boolean;
}
