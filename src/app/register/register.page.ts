import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userName = '';
  password = '';
  cpassword = '';

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public route: Router) { }

  ngOnInit() {
  }

  async register() {
    const { userName, password, cpassword } = this;

    if (password !== cpassword) {
      this.showAlert('Error', 'Passwords dont match');
      return console.error('Password don\'t match');
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(userName + '@codedamn.com', password);
      console.log(res);
      this.showAlert('Success', 'Welcome aboard!!!');
      this.route.navigate(['/tabs']);
    } catch (error) {
      console.dir(error);
      this.showAlert('Error', error.message);
    }

  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    });

    return await alert.present();
  }

}
