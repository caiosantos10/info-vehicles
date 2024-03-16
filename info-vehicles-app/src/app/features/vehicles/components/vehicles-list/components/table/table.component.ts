import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizePipe } from '../../../../../../shared/utils/capitalize.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() items!: any[];
  @Input() columns!: string[];
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  deleteItem(id: string): void {
    this.delete.emit(id);
  }

  navigateToEdit(id: string): void {
    this.edit.emit(id);
  }

  clickActionsMenu(item: any): void {
    item.showActions = !item.showActions;
  }
}
