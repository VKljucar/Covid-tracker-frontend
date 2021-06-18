import { Component, OnInit } from "@angular/core";
import { Novozarazeni } from "../novozarazeni";
import { NovozarazeniService } from "../novozarazeni.service";
import { BolniceService } from "../bolnice/bolnice.service";
import { Bolnice } from "../bolnice/bolnice";

@Component({
    selector: 'app-novozarazeni-upis',
    templateUrl: './novozarazeni-upis.component.html',
    styleUrls: ['./novozarazeni-upis.component.css']
})
export class NovozarazeniUpisComponent implements OnInit{

    novozarazeni: Novozarazeni[];
    bolnice: Bolnice[];
    
    constructor(
        private novozarazeniService: NovozarazeniService,
        private bolniceService: BolniceService
    ){}

    ngOnInit(): void{
        this.bolniceService.getBolnice()
            .subscribe(bolnice => this.bolnice = bolnice)
    }


    add(osobaId: number, ime: string, prezime: string, datRodenja: string, adresa: string, telefon: string, email: string, hospitaliziran: string, lokacija: number){
        ime = ime.trim();
        prezime = prezime.trim();
        datRodenja = datRodenja.trim();
        adresa = adresa.trim();
        telefon = telefon.trim();
        email = email.trim();
        hospitaliziran = hospitaliziran.trim();
        lokacija = lokacija;
        if(!ime || !prezime || !datRodenja || !adresa || !telefon || !email){
            if (hospitaliziran == 'N'){
                lokacija = 0;
            }
            return;
        }

        this.novozarazeniService.addNovozarazeni({osobaId, ime, prezime, datRodenja, adresa, telefon, email, hospitaliziran, lokacija} as Novozarazeni)
            .subscribe(novozarazeni => {
                this.novozarazeni.push(novozarazeni);
            })
        alert("dodali ste novu osobu!");
        location.reload();
    }

}