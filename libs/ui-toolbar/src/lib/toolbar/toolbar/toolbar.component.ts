import { Component, EventEmitter, OnInit , Output} from '@angular/core';

@Component({
  selector: 'songify-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() sidenav = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
