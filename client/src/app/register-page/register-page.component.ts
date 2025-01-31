import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthSandbox } from '../core/auth/auth.sandbox';
import { LoginModel } from '../core/auth/models/login.model';

import { Subscription } from 'rxjs';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

    public registerForm: FormGroup;
    public email: FormControl;
    public password: FormControl;
    public message: string;

    private subscriptions: Subscription[] = [];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authSandbox: AuthSandbox
    ) {
        // if (!!localStorage.getItem('token')) {
        //     this.router.navigate(['/dashboard']);
        // }
    }

    ngOnInit(): void {
      this.initForm();
      this.subscriptions.push(this.authSandbox.registerFail$.subscribe(data => {
          if (data) {
            this.message = 'User already registered';
          }
      }));
    }

    ngOnDestroy(): void {
      this.subscriptions.map(sub => sub.unsubscribe());
    }

    private initForm() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);

        this.registerForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    }

    public onSubmit() {
        const params: any = {};
        params.email = this.email.value ? this.email.value : '';
        params.password = this.password.value ? this.password.value : '';
        this.authSandbox.register(params);
    }

}
