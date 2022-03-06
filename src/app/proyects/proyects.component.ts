import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  constructor(private spinner: SpinnerService) {
    spinner.cargarSpinner();
    setTimeout(() => {
      spinner.cerrarSpinner();
    }, 1000);
  }

  ngOnInit(): void {}

}
