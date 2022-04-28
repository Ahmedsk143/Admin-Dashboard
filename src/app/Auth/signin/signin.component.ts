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
  password: string;
  otpForm!: FormGroup;
  passwordShown = false;
  sentOtp = false;
  signinError = false;
  otpError = false;
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
    this.sharedService.isLoading.next(true);
    if (this.signinForm.value.password)
      this.authService.signinFF(this.signinForm.value.password).subscribe({
        next: (res) => {
          console.log(res);
          this.sentOtp = true;
          this.password = this.signinForm.value.password;
          this.sharedService.isLoading.next(false);
          this.signinError = false;
        },
        error: (res) => {
          this.signinError = true;
          this.sharedService.isLoading.next(false);
        },
      });
  }
  onOTP() {
    this.sharedService.isLoading.next(true);
    if (this.otpForm.value.otp) {
      this.authService.getOTP(this.otpForm.value.otp);
    }
  }
  changeInput(input: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.passwordShown = !this.passwordShown;
  }
}
