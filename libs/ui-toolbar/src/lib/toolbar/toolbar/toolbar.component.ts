import { Component, EventEmitter, OnInit ,Input, Output} from '@angular/core';

@Component({
  selector: 'songify-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title='';
  @Output() sidenav = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
