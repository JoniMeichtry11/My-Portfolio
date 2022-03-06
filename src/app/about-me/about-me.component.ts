import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(private spinner: SpinnerService) {
    spinner.cargarSpinner();
    setTimeout(() => {
      spinner.cerrarSpinner();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
