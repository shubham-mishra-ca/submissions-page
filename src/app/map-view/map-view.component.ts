import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SideListViewComponent } from '../side-list-view/side-list-view.component'; 

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [SideListViewComponent],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef<HTMLDivElement>;
  map: google.maps.Map | undefined;
  lat = 40.730610; // Default latitude
  lng = -73.935242; // Default longitude
  // Array of marker positions 
  markers = [
    { lat: 40.730610, lng: -73.935242 },
    { lat: 41.730610, lng: -74.935242},
    { lat: 40.964529, lng: -76.884410},   
    { lat: 40.602294, lng: -75.471410},   
    { lat: 41.308214, lng: -72.925052},   

  ];
  ngAfterViewInit(): void {
    this.mapInitializer();
    this.addMarkers();
  }

  mapInitializer(): void {
    const coordinates = new google.maps.LatLng(this.lat, this.lng);
    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 8
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  }

  addMarkers(): void {
    const icon = {
      url: '/assets/location-pin.png', //path to the image
      scaledSize: new google.maps.Size(50, 50), // size of the image
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(25, 50) // anchor 
    };
  
    this.markers.forEach(markerInfo => {
      new google.maps.Marker({
        position: new google.maps.LatLng(markerInfo.lat, markerInfo.lng),
        map: this.map,
        icon: icon, 
      });
    });
  }
}
