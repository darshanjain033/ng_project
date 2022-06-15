import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  formvalue!: FormGroup 
  restaurantModelObject : RestaurantData = new RestaurantData;
  allRestaurantData: any;
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      name:[" "],
      email:[" "],
      mobile:[" "],
      address:[" "],
      services:[" "]
    })
    this.getAllData()
  }
//Now subscribing our data which is maped via Services...
addResto(){
  this.restaurantModelObject.name = this.formvalue.value.name;
  this.restaurantModelObject.email = this.formvalue.value.email;
  this.restaurantModelObject.mobile = this.formvalue.value.mobile;
  this.restaurantModelObject.address = this.formvalue.value.address;
  this.restaurantModelObject.services = this.formvalue.value.services;

  this.api.postRestaurant(this.restaurantModelObject).subscribe(res=>{
    console.log(res);
    alert("Restaurant Record Added Successfully...00");
    this.formvalue.reset()
  },
  
  _err=>{
    alert("Something went wrong...!0");
  }
  )
}
//Get all Data
getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData = res;
  })
} 
}
