import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min.js';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard-component.css']
})
export class DashboardComponent implements OnInit {

  allNovozarazeni;
  novozarazeniForDay;
  allHospitalizirani;
  hospitaliziraniForDay;
  allCijepljeni;
  cijepljeniForDay;
  map: number[];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getAllNovozarazeni();
    this.getNovozarazeniForDay();
    this.getAllHospitalizirani();
    this.getHospitaliziraniForDay();
    this.getAllCijepljeni();
    this.getCijepljeniForDay();
    this.getNovozarazeniByDay();
    this.chart1();
    this.chart2();
    this.chart3();
  }

  chart1(): void{
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: "Broj zaraženih u proteklih 7 dana"
      },
      data: [
        {
          type: "column", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "1", y: 3},
            { label: "2", y: 2 },
            { label: "3", y: 3 },
            { label: "4", y: 4 },
            { label: "5", y: 5 },
            { label: "6", y: 23 },
            { label: "7", y: 23 },
            { label: "8", y: 12 }
          ]
        }
      ]
    });
    chart.render();
  }

  chart2(): void{
    let chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: "Broj hospitaliziranih u proteklih 7 dana"
      },
      data: [
        {
          type: "pie", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "Ponedjeljak", y: 21 },
            { label: "Utorak", y: 15 },
            { label: "Srijeda", y: 25 },
            { label: "Četvrtak", y: 30 },
            { label: "Petak", y: 28 }
          ]
        }
      ]
    });
    chart2.render();
  }

  chart3(): void{
    let chart3 = new CanvasJS.Chart("chartContainer3", {
      theme: "light1", // "light2", "dark1", "dark2"
      title: {
        text: "Broj cijepljenih u proteklih 7 dana"
      },
      data: [
        {
          type: "spline", // Change type to "bar", "area", "spline", "pie",etc.
          dataPoints: [
            { label: "Ponedjeljak", y: 10 },
            { label: "Utorak", y: 15 },
            { label: "Srijeda", y: 25 },
            { label: "Četvrtak", y: 30 },
            { label: "Petak", y: 28 }
          ]
        }
      ]
    });
    chart3.render();
  }

getAllNovozarazeni(): void{
    this.dashboardService.getAllNovozarazeni()
        .subscribe(novozarazeni => this.allNovozarazeni = novozarazeni)
}

getNovozarazeniForDay(): void{
  this.dashboardService.getNovozarazeniForDay()
      .subscribe(novozarazeni => this.novozarazeniForDay = novozarazeni)
}

getAllHospitalizirani(): void{
  this.dashboardService.getAllHospitalizirani()
      .subscribe(novozarazeni => this.allHospitalizirani = novozarazeni)
}

getHospitaliziraniForDay(): void{
  this.dashboardService.getHospitaliziraniForDay()
      .subscribe(novozarazeni => this.hospitaliziraniForDay = novozarazeni)
}

getAllCijepljeni(): void{
  this.dashboardService.getAllCijepljeni()
      .subscribe(novozarazeni => this.allCijepljeni = novozarazeni)
}

getCijepljeniForDay(): void{
  this.dashboardService.getCijepljeniForDay()
      .subscribe(novozarazeni => this.cijepljeniForDay = novozarazeni)
}

getNovozarazeniByDay(): void{
  this.dashboardService.getNovozarazeniByDay()
      .subscribe(novozarazeni => this.map = novozarazeni)
}

}