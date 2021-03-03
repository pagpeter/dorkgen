import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googe-drive',
  templateUrl: './googe-drive.component.html',
  styleUrls: ['./googe-drive.component.css']
})
export class GoogeDriveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  search() {
    let term = (<HTMLInputElement>document.getElementById("term")).value;
    console.log("Term: " + term);

    let url = "https://google.com/search?q=";
    url += term.replace("+","%2B");
    url += "+site:https://drive.google.com/file/d+|+site:drive.google.com/drive/folders";
    url = url.replace(" ", "+");

    var win = window.open(url, '_blank');
    win.focus();
  }

}
