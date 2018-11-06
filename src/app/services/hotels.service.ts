import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class HotelsService {
  private _hotelsUrl = 'http://localhost:3030/api/hotels';
  private _hotelUrl = 'http://localhost:3030/api/hotel';
  constructor(private http:HttpClient) { }

  getAllHotels(){
    return this.http.get<any>(this._hotelsUrl);
  }
  getHotelsWithFilter(offset,count){
    return this.http.get<any>(this._hotelsUrl+"?offset="+offset+"&count="+count);
  }
  getOneHotel(hotelId){
    return this.http.get<any>(this._hotelUrl+"/"+hotelId);
  }
}
