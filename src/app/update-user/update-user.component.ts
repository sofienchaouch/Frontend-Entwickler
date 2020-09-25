import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  updateUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:UserService,
    private router : Router,
    private toastr: ToastrService) {

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

    this.updateUserForm = this.fb.group(formControls)
  }

  get firstname() { return this.updateUserForm.get('firstname') }
  get lastname() { return this.updateUserForm.get('lastname') }
  get email() { return this.updateUserForm.get('email') }


  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    
    this.userService.getOneUser(idUser).subscribe(
      res=>{
        let user = res;

        this.updateUserForm.patchValue({
          firstname : user.firstname,
          lastname : user.lastname ,
          email : user.email
        })
        
      },
      err=>{
        console.log(err);
      }
    )
    
  }

  updateUser() {
    let data = this.updateUserForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new User(data.firstname,data.lastname,data.email,idUser);

    this.userService.updateUser(user,idUser).subscribe(
      res=>{
        this.toastr.warning(res.message);

        this.router.navigate(['/people-list']);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
