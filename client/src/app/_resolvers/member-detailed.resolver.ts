import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MembersService } from '../_services/members.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<boolean> {
  
  constructor(private memberService: MembersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.memberService.getMember(route.paramMap.get('username'));
  }
}
