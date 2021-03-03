import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-directories',
  templateUrl: './open-directories.component.html',
  styleUrls: ['./open-directories.component.css']
})
export class OpenDirectoriesComponent implements OnInit {

  constructor() { 
  }

  search() {
    let formats = {
      "Any": "",
      "Video": "%2B(.mkv|.mp4|.avi|.mov|.mpg|.wmv)",
      "Music": "%2B(.ogg|.mp3|.flac|.wma|.m4a)",
      "Database (sql)": "%2B(.sql|.cql)",
      "eBook": "%2B(pdf|epub|mob)",
      "Picture": "%2B(bmp|gif|jpg|png|psd|tif|tiff)",
      "Archive": "%2B(.rar|.tar|.7z|.zip|.si)",
      "Torrent": ".torrent"
    }

    let term = (<HTMLInputElement>document.getElementById("term")).value;
    let fileType = document.getElementById("fileType").innerText.trim();

    console.log("Term: " + term);
    console.log("File type: " + fileType);

    let url = "https://google.com/search?q=";
    url += term.replace("+","%2B");
    url += "+intitle:%22index of%22 -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) ";
    url += formats[fileType]

    url = url.replace(" ", "+");

    var win = window.open(url, '_blank');
    win.focus();

    console.log(url);
  }

  ngOnInit(): void {
  }

}
