import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup

  constructor(
    private fb: FormBuilder, 
    private userSerivce:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    }

    this.addUserForm = this.fb.group(formControls)
  }

  get firstname() { return this.addUserForm.get('firstname') }
  get lastname() { return this.addUserForm.get('lastname') }
  get email() { return this.addUserForm.get('email') }


  ngOnInit(): void {
  }

  addUser() {
    let data = this.addUserForm.value;
    console.log(data.email);

    let user = new User(data.firstname,data.lastname,data.email,null);

    this.userSerivce.addUser(user).subscribe(
      res=>{
        
        this.toastr.success(res.message);
        this.router.navigate(['/people-list']);
      },
      err=>{
        console.log(err);
      }
    )

  }
}