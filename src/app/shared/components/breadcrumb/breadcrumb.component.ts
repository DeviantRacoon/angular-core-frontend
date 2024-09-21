import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  @Input() currentModule: {
    nameMenu: string;
    iconMenu: string;
    nameModule: string;
    iconModule: string;
  } = { nameMenu: '', iconMenu: '', nameModule: '', iconModule: '' };

  constructor() { }

  ngOnInit() { }
}
