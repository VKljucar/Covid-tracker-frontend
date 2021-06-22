import { Component, OnInit } from '@angular/core';
import { AdminAuthAccessService } from '../access/admin-access.service';
import { Novozarazeni } from '../novozarazeni';
import { NovozarazeniService } from '../novozarazeni.service';

@Component({
    selector: 'app-novozarazeni-pregled',
    templateUrl: './novozarazeni-pregled.html',
    styleUrls: ['./novozarazeni-pregled.css']
})
export class NovozarazeniPregledComponent implements OnInit{

    novozarazeniList: Novozarazeni[];

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

    getByParameters(ime: string, prezime: string, hospitaliziran: string): void {
        this.novozarazeniService.getByParameters(ime, prezime, hospitaliziran)
          .subscribe(novozarazeni => this.novozarazeniList = novozarazeni
        );
      }
      
    delete(id: number): void{
        this.novozarazeniService.deleteNovozarazeni(id).subscribe();
        location.reload();
    }
    
}