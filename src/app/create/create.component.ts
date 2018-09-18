import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  rForm: FormGroup;

  constructor(private user: UsersService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { 
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'age': [null, Validators.required],
      'gender': [null, Validators.requiredTrue],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'phone': [null, Validators.required],
      'address': [null, Validators.required],
      'note': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm(fVal) {
    this.user.addUser(fVal);
    this.router.navigateByUrl('/');
  }

}
