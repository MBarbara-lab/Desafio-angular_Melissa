import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  closePopUp() {
    const popUp = document.getElementById("popUp")

    if (popUp) {
      popUp.style.display = "none"
    }
  }
}
