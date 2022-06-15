import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private _http:HttpClient) { }

  // Now here i will define the POST, GET, PUT, DELETE 

  // Create Restaurant using POST method
  postRestaurant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
  return res;
}))  
}

//Get Restaurant data using GET method
getRestaurant(){
  return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
    return res;
  }))
}

//Update Restaurant data using PUT method
updateRestaurant(data:any,id:number){
  return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
    return res;
  }))
}

//Delete Restaurant using DELETE method
deleteRestaurant(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
    return res;
  }))
}
}
