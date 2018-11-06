import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.css']
})
export class HotelsDetailsComponent implements OnInit {
  hotel={};
  constructor( private acRoutes:ActivatedRoute,private _hotelSrv:HotelsService) { }

  ngOnInit() {
    this.acRoutes.paramMap.subscribe(
      (params)=>{
        console.log(params.get('hotelId'));
        this._hotelSrv.getOneHotel(params.get('hotelId'))
        .subscribe(
        (res)=>{
          console.log(res);
          this.hotel=res;        
        },(err)=>{
          console.log(err);

        })
      }
    )
  }

}
