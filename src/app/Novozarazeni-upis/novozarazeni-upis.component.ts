import { Component, OnInit } from "@angular/core";
import { Novozarazeni } from "../novozarazeni";
import { NovozarazeniService } from "../novozarazeni.service";

@Component({
    selector: 'app-novozarazeni-upis',
    templateUrl: './novozarazeni-upis.component.html',
    styleUrls: ['./novozarazeni-upis.component.css']
})
export class NovozarazeniUpisComponent {

    novozarazeni!: Novozarazeni[];

    constructor(
        private novozarazeniService: NovozarazeniService
    ){}

    add(ime: string, prezime: string, datRodenja: string, adresa: string, telefon: string, email: string, hospitaliziran: string, lokacija: number){
        ime = ime.trim();
        prezime = prezime.trim();
        datRodenja = datRodenja.trim();
        adresa = adresa.trim();
        telefon = telefon.trim();
        email = email.trim();
        hospitaliziran = hospitaliziran.trim();
        lokacija = lokacija;
        if(!ime || !prezime || !datRodenja || !adresa || !telefon || !email){
            return;
        }

        this.novozarazeniService.addNovozarazeni({ime, prezime, datRodenja, adresa, telefon, email, hospitaliziran, lokacija} as Novozarazeni)
            .subscribe(novozarazeni => {
                this.novozarazeni.push(novozarazeni);
            })
    }

}