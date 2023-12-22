import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent implements OnInit {
  id: any = "overview/";


  ngOnInit() {
    this.id = 'brandstory';
  }

  tabChange(ids: string) {
    this.id = ids;
  }
}



