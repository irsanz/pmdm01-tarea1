import { Component, OnInit } from '@angular/core';

interface IValor{
  imagen: string;
  url: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  valoresLista: IValor[] = [
    {
      imagen: "/assets/img/BIRT_LOGO.png",
      url: "https://www.birt.eus/",
    },
    {
      imagen: "/assets/img/easo_logo.png",
      url: "https://easo.hezkuntza.net/eu/inicio",
    },
    {
      imagen: "/assets/img/nicolas_larburu_logo.jpg",
      url: "https://nlarburu.hezkuntza.net/es/inicio",
    },
    {
      imagen: "/assets/img/ciudad_jardin_logo.png",
      url: "https://ciudadjardin.hezkuntza.net/eu/home",
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
