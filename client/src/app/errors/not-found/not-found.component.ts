import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  
  return() {

    this.accountService.currentUser$.subscribe(
      user => {
        if (user) {
          this.router.navigateByUrl("/members")
        }
        else {
          this.router.navigateByUrl("/")
        }
      })
    
  }
}
