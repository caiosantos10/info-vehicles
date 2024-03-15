import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from './interfaces/MenuItem';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setMenuItemByPath();
  }

  redirectTo(item: MenuItem): void {
    this.router.navigateByUrl(item.path);
  }

  private activeMenuItem(selectedItem: MenuItem): void {
    this.menuItems = this.menuItems.map(item => item === selectedItem
      ? { ...item, isActive: true }
      : { ...item, isActive: false }
    )
  }

  private setMenuItemByPath() {
    this.router.events.subscribe(path => {
      if (path instanceof NavigationEnd) {
        const itemToBeSelected = this.menuItems.find(item => item.path === path.url) as MenuItem;
        this.activeMenuItem(itemToBeSelected);
      }
    });
  }
}
