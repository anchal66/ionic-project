import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;
  constructor(private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true;
    this.authService.login();
    this.loadingController.create({
      keyboardClose: true,
      message: 'Logging In...'
    }).then(loadingEl=>{
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigate(['/']);
        },
        1500)
    })
  }

  onSubmit(form: NgForm){
    if(!form.valid)  {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password)
    if(this.isLogin){
      //send request to login server
    }
    else{
      //send request to signup server
    }
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }
}
