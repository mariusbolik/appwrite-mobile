import { Component, EnvironmentInjector, OnInit, inject, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { routes } from './tabs.routes';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  public tabs = signal<Routes>([]);

  ngOnInit() {
    const entity = 'databases';
    const tabs = routes.find(r => r.path === entity)?.children;
    if (tabs) {
      this.tabs.set(tabs);
    }
  }
}
