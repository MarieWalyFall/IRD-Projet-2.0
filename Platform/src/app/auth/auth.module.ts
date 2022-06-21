import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AuthService} from "../core/services/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AuthRoutingModule,
    ],
    providers: [
        AuthService,
    ],
    exports: [
        SigninComponent,
        SignupComponent
    ]
})
export class AuthModule { }
