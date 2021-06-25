import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min.js';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.js';
import { Chart } from 'chart.js'

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
  dataPoints: Dashboard[];
  dataPointsHosp: Dashboard[];
  dataPointsCijep: Dashboard[];

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
    this.chart1();
    this.chart2();
    this.chart3();

  }

  chart1(): void {
    this.dashboardService.getNovozarazeniByDay()
      .subscribe(novozarazeni => {
        this.dataPoints = novozarazeni;
        let chart = new CanvasJS.Chart("chartContainer", {
          theme: "light1", // "light2", "dark1", "dark2"
          title: {
            text: "Broj zaraženih u proteklih 7 dana"
          },
          data: [
            {
              type: "column", // Change type to "bar", "area", "spline", "pie",etc.
              dataPoints: this.dataPoints
            }
          ]
        });
        chart.render();
      })
  }

  chart2(): void {
    this.dashboardService.getHospitaliziraniByDate()
      .subscribe(novozarazeni => {
        this.dataPointsHosp = novozarazeni;
        let chart2 = new CanvasJS.Chart("chartContainer2", {
          theme: "light1", // "light2", "dark1", "dark2"
          title: {
            text: "Broj hospitaliziranih u proteklih 7 dana"
          },
          data: [
            {
              type: "pie", // Change type to "bar", "area", "spline", "pie",etc.
              dataPoints: this.dataPointsHosp
            }
          ]
        });
        chart2.render();
      })
  }

  chart3(): void {
    this.dashboardService.getCijepljeniByDate()
      .subscribe(novozarazeni => {
        this.dataPointsCijep = novozarazeni;
        let chart3 = new CanvasJS.Chart("chartContainer3", {
          theme: "light1", // "light2", "dark1", "dark2"
          title: {
            text: "Broj cijepljenih u proteklih 7 dana"
          },
          data: [
            {
              type: "spline", // Change type to "bar", "area", "spline", "pie",etc.
              dataPoints: this.dataPointsCijep
            }
          ]
        });
        chart3.render();
      })
  }

  getAllNovozarazeni(): void {
    this.dashboardService.getAllNovozarazeni()
      .subscribe(novozarazeni => this.allNovozarazeni = novozarazeni)
  }

  getNovozarazeniForDay(): void {
    this.dashboardService.getNovozarazeniForDay()
      .subscribe(novozarazeni => this.novozarazeniForDay = novozarazeni)
  }

  getAllHospitalizirani(): void {
    this.dashboardService.getAllHospitalizirani()
      .subscribe(novozarazeni => this.allHospitalizirani = novozarazeni)
  }

  getHospitaliziraniForDay(): void {
    this.dashboardService.getHospitaliziraniForDay()
      .subscribe(novozarazeni => this.hospitaliziraniForDay = novozarazeni)
  }

  getAllCijepljeni(): void {
    this.dashboardService.getAllCijepljeni()
      .subscribe(novozarazeni => this.allCijepljeni = novozarazeni)
  }

  getCijepljeniForDay(): void {
    this.dashboardService.getCijepljeniForDay()
      .subscribe(novozarazeni => this.cijepljeniForDay = novozarazeni)
  }



}