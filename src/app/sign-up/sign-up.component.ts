import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private myService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(formData){
    this.myService.emailSignUp(formData.value.email, formData.value.password)
  }
}
