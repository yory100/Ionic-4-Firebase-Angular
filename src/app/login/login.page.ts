import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 userName = '';
  password = '';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  // User authentification with FireBase
  async login() {
    const { userName, password } = this;

    try {

      const res = await this.afAuth.auth.signInWithEmailAndPassword(userName + '@codedamn.com', password);

    } catch (error) {
      console.dir(error);
      if (error.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

}
