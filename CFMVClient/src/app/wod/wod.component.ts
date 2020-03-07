import { Component, OnInit } from '@angular/core';
import {Wod} from "../model/Wod";
import {Contact} from "../model/Contact";
import {WodService} from "../services/wod.service";

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.scss']
})
export class WODComponent implements OnInit {
    public wodTemp: Wod; //undfinde
    private date = new Date();
    private tempDate : string;
    private tempDay: string;
    private days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    constructor(private wodService: WodService) {
      this.wodTemp = new Wod();//null 1 23
    }

  ngOnInit() {
      //service -> data

    this.tempDate = this.getDate();
    this.wodTemp.day = this.days [this.getDay()];
    this.wodTemp.index = 2;
    this.wodTemp.text = "asds";
    this.wodTemp.date = this.tempDate;


    //samo datum 12/12/2020 GM as
    //pre
    //this.wodService.findByvedDate()
    this.wodService.findByDate("123").subscribe((data:any) => {
      console.log(data);
    });
    }

  yydayDateBtn(yydayDate){
    this.wodService.findByDate(yydayDate).subscribe((data:any) => {
      console.log(data);
    });
    this.wodTemp.day = this.days [this.getDay()];
    this.wodTemp.index = 2;
    this.wodTemp.text = "asds";
    this.wodTemp.date = yydayDate;

  }

  ydayDateBtn(ydayDate){
    this.wodService.findByDate(ydayDate).subscribe((data:any) => {
      console.log(data);
    });
    this.wodTemp.day = this.days [this.getDay()];
    this.wodTemp.index = 2;
    this.wodTemp.text = "qrwrqwrrqw";
    this.wodTemp.date = ydayDate;
  }

  todayDateBtn( todaysDate){
    this.wodService.findByDate(todaysDate).subscribe((data:any) => {
      console.log(data);
    });
    this.wodTemp.day = this.days [this.getDay()];
    this.wodTemp.index = 2;
    this.wodTemp.text = "dasdasd";
    this.wodTemp.date = todaysDate;
  }


  getDate() :string {
    let d = new Date();

    let date = d.getDate();
    let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    let year = d.getFullYear();

    let dateStr = date + "/" + month + "/" + year;
    console.log(dateStr);
    return dateStr;
  }
  getDay() : number {
    let d = new Date();
    let day = d.getDay();
    console.log(day);
    return day;
  }

  getYdayDate() : string {
    let dte = new Date();
    dte.setDate(dte.getDate() - 1);
    console.log(dte.toString());
    let returndte;
    let date = dte.getDate();
    let month = dte.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    let year = dte.getFullYear();

    returndte = date + "/" + month + "/" + year;
    return returndte;
  }

  getYydayDate() : string {
    let yydte = new Date();
    yydte.setDate(yydte.getDate() - 2);
    console.log(yydte.toString());
    let returnyydte;
    let date = yydte.getDate();
    let month = yydte.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    let year = yydte.getFullYear();

    returnyydte = date + "/" + month + "/" + year;
    return returnyydte;

  }
}
