import { Component, OnInit } from '@angular/core';
import { Novozarazeni } from '../novozarazeni';
import { NovozarazeniService } from '../novozarazeni.service';

@Component({
    selector: 'app-novozarazeni-pregled',
    templateUrl: './novozarazeni-pregled.html',
    styleUrls: ['./novozarazeni-pregled.css']
})
export class NovozarazeniPregledComponent implements OnInit{

    novozarazeniList!: Novozarazeni[];
    novozarazeni!: Novozarazeni;

    constructor(
        private novozarazeniService: NovozarazeniService
    ){}

    ngOnInit(): void{
        this.novozarazeniService.getNovozarazeni()
            .subscribe(novozarazeni => this.novozarazeniList = novozarazeni)
    }

    getNovozarazeni(): void{
        this.novozarazeniService.getNovozarazeni()
            .subscribe(novozarazeni => this.novozarazeniList = novozarazeni)
    }

    getByParameters(): void {
        const ime = 'Ime2';
        const prezime = 'Prezime3';
        const hospitaliziran = 'N';

        this.novozarazeniService.getByParameters(ime, prezime, hospitaliziran)
          .subscribe(novozarazeni => {
            this.novozarazeni = novozarazeni;
          });
      }
    
}