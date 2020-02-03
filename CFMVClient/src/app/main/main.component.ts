import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public innerWidth: any;
  //@ViewChild(QuilldEditorComponent, {static: true}) quillEditorComponentInstance;
  @ViewChild(MatSidenav, {static: false}) sidenav2

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    // console.log('size changed.', event);
    this.innerWidth = window.innerWidth;
    console.log('size changed. => ' + this.innerWidth);
    if(this.innerWidth >= 1201){
      this.sidenav2.close();
    }
  }

  title = 'CFMVClient';
}
