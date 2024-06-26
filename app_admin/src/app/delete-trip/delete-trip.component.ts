import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';



@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.tripService.deleteTrip(tripCode)
      .then( data => {
        console.log(data);
        this.router.navigate(['list-trips']);
      });
  }

}
