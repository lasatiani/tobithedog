import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3',
    },
    {
      name: 'light',
      icon: 'wb_sunny',
    },
  ];

  constructor(public colorSchemeService: ThemeService) {}

  setTheme() {
    let theme =
      this.colorSchemeService.currentActive() === 'dark' ? 'light' : 'dark';
    this.colorSchemeService.update(theme);
  }
}
