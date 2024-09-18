import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  usuario : string;
  password : string;


  constructor()
  {
    this.usuario = "";
    this.password = "";
  }

  iniciarSesion()
  {
    return this.usuario + " " + this.password;
  }

}
