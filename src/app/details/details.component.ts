import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements  OnInit {

  
  detailsUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:UserService,
    private router : Router) {
      let formControls = {

        id: new FormControl(),

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
  
      this.detailsUserForm = this.fb.group(formControls)
    }

  get firstname() { return this.detailsUserForm.get('firstname') }
  get lastname() { return this.detailsUserForm.get('lastname') }
  get email() { return this.detailsUserForm.get('email') }
  get id() { return this.detailsUserForm.get('id') }


  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    
    this.userService.getOneUser(idUser).subscribe(
      res=>{
        let user = res;
        this.detailsUserForm.patchValue({
          firstname : user.firstname,
          lastname : user.lastname ,
          email : user.email,
          id : user.id

        })
        
      },
      err=>{
        console.log(err);
      }
    )
    
  }

}
