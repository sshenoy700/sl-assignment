import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  rForm: FormGroup;

  userId: number;
  regUser: Object;

  constructor(private user: UsersService, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.route.params.subscribe( 
      params => this.userId = params.id 
    )

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'age': [null, Validators.required],
      'gender': [null, Validators.requiredTrue],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phone': [null, Validators.required],
      'address': [null, Validators.required],
      'note': ''
    });
  }

  ngOnInit() {
    this.user.editUser(this.userId).subscribe(
      user => {
        this.regUser = user[0]; 
        this.rForm.setValue({
          name: this.regUser['name'],
          age: this.regUser['age'],
          gender: this.regUser['gender'],
          email: this.regUser['email'],
          phone: this.regUser['phone'],
          address: this.regUser['address'],
          note: this.regUser['notes']
        });
      }
    );

    this.onValChange();
  }

  onValChange():void {
    this.rForm.valueChanges.subscribe(val => {
      val.id = this.userId;
      this.user.updateUser(val);
    });
  }
}
