import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  otpForm!: FormGroup;
  passwordShown = false;
  sentOtp = false;
  signinError = false;
  otpError = false;
  clicked = false;

  constructor(
    public authService: AuthService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      password: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
    this.otpForm = new FormGroup({
      otp: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
    this.authService.otpError$.subscribe((error) => {
      this.otpError = error;
      this.sharedService.isLoading.next(false);
    });
  }
  onSignin() {
    if (this.signinForm.value.password) {
      this.sharedService.isLoading.next(true);
      this.authService.signinFF(this.signinForm.value.password).subscribe({
        next: (res) => {
          this.sentOtp = true;
          this.sharedService.isLoading.next(false);
          this.signinError = false;
        },
        error: (res) => {
          this.signinError = true;
          this.sharedService.isLoading.next(false);
        },
      });
    }
  }
  onOTP() {
    if (this.otpForm.value.otp) {
      this.sharedService.isLoading.next(true);
      this.authService.validateOTP(this.otpForm.value.otp);
    }
  }
  onResend() {
    if (!this.clicked) {
      this.onSignin();
      this.clicked = true;
    }
    setTimeout(() => {
      this.clicked = false;
    }, 30000);
  }
  changeInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.passwordShown = !this.passwordShown;
  }
}
