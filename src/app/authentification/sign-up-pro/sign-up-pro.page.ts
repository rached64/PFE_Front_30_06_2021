import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MustMatch } from '../confirmed.validator';

@Component({
  selector: 'app-sign-up-pro',
  templateUrl: './sign-up-pro.page.html',
  styleUrls: ['./sign-up-pro.page.scss'],
})
export class SignUpProPage implements OnInit {
  form:FormGroup ;
  submitted=false ;
  data:any ;

  constructor( 
    private formBuilder:FormBuilder,
    private service:AuthentificationService,
    private toastr: ToastrService,
    private router:Router,

    ) { }

  createForm(){
    this.form = this.formBuilder.group({
      nom:[null,Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required , Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      telephone:[null,Validators.required],
      SIERT:[null,Validators.required],
      NomSociete:[null,Validators.required],
      catActivite:[null,Validators.required],
      Adresse:[null,Validators.required],
      codePostal:[null,Validators.required]
       },{
         validator:MustMatch('password','confirmPassword')
       });
  }

  ngOnInit():void
  {
    this.createForm();
  }
  get f(){
    return this.form.controls;
  }
  submit()
  {
    this.submitted = true ;
    if(this.form.invalid)
    {
      return;
    }
    this.service.registerPro(this.form.value).subscribe(res=>{
      this.data = res ;
      console.log(res);
     if (this.data.status === 1){
       this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
         timeOut:2000,
         progressBar:true
       });
       this.router.navigate(['/login']);
     }else{
       this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
        timeOut:2000,
        progressBar:true
       });
     }
     this.submitted= false ;
     this.form.get('nom').reset();
     this.form.get('email').reset();
     this.form.get('password').reset();
     this.form.get('confirmPassword').reset();
     this.form.get('telephone').reset();
     this.form.get('SIERT').reset();
     this.form.get('NomSociete').reset();
     this.form.get('catActivite').reset();
     this.form.get('Adresse').reset();
     this.form.get('codePostal').reset();
     this.form.get('NomSociete').reset();

    });
  }

}
