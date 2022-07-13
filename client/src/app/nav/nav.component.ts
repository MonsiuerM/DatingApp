import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {

    const unsub = this.accountService.currentUser$.subscribe(user => {
      if (user === null) return;
      this.model.username = user.username;
    });
    unsub.unsubscribe;
  }

  login() {
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      
    }, error => {
      console.log("Error: ",error);
    });
  }

  logout() {
    this.accountService.logout();
  }
}

