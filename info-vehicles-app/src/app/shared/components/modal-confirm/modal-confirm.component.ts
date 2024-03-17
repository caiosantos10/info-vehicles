import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {
  @Input() confirmAction!: () => void;
  show = false;

  constructor(private ef: ElementRef) { }

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  confirm() {
    this.confirmAction();
    this.closeModal();
  }
}
