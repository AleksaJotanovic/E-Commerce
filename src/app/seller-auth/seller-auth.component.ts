import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { LogIn, SignUp } from 'src/data-types';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  isLoginDisplayed: boolean = false;

  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  // Functionalities
  signUp(data: SignUp): void {
    this.seller.userSignUp(data)
  }
  logIn(data: LogIn): void {
    console.log(data)
  }

  openLogin() {
    this.isLoginDisplayed = true;
  }
  openSignup() {
    this.isLoginDisplayed = false;
  }
}
