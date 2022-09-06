import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Photo } from 'src/app/_models/photo';
import { User } from 'src/app/_models/user';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {

  photos: Photo[] = [];
  bsModalRef: BsModalRef;


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminService.getPhotosForApproval().subscribe(photos => {
      this.photos = photos;
    })
  }
  
  approvePhoto(photoid: number) {

    this.adminService.approvePhoto(photoid).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoid), 1);
      })
  }
  
  rejectPhoto(photoid: number) {

    this.adminService.rejectPhoto(photoid).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoid), 1);
      })
  }
  

}
