import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {
  private confirmAction!: Observable<any>;
  show = false;

  openModal(fn: Observable<any>) {
    this.show = true;
    this.confirmAction = fn;
  }

  closeModal() {
    this.show = false;
  }

  confirm() {
    this.confirmAction.subscribe();
    this.closeModal();
  }
}
