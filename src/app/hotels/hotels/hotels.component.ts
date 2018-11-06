import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  offset = 0;count=5;
  hotels=[];
  constructor(private _hotelsSrv:HotelsService) { }

  ngOnInit() {
    this.getHotels();
  }
  getHotels(){
    this._hotelsSrv.getAllHotels()
    .subscribe(
      res =>{
        console.log(res);
        this.hotels = res;
      },
      err =>{
        console.log(err);
      }
      )
  }
  getHotelsWithFilter(offset,count){
    console.log(offset + " -- "+count);    
    this._hotelsSrv.getHotelsWithFilter(offset,count)
    .subscribe(
      res =>{
        console.log(res);
        this.hotels = res;
      },
      err =>{
        console.log(err);
      }
      );
      this.offset = offset;
  }
}
