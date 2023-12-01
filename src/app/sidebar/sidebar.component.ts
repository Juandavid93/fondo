import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subItems?: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Registrar Usuario',  icon:'pe-7s-user', class: '' },
    { path: '/savings', title: 'Crear ahorro',  icon:'pe-7s-piggy', class: '' },
    { path: '/loans', title: 'Solicitud prestamo',  icon:'pe-7s-cash', class: '' },
    { path: '/table', title: 'Pagos',  icon:'pe-7s-wallet', class: '', 
    subItems: [
      { path: '/table', title: 'Ahorros', icon: 'pe-7s-piggy', class: '' },
      { path: '/table', title: 'Prestamos', icon: 'pe-7s-cash', class: '' }
    ] },
    { path: '/reports', title: 'Reportes',  icon:'pe-7s-display1', class: '' },
    { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
