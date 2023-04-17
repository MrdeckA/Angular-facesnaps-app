import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapService : FaceSnapsService, private route : ActivatedRoute){}


  faceSnap! :  FaceSnap;
  buttonText!: string;


  ngOnInit(): void {
      this.buttonText = 'Oh Snap'
      const snapId = + this.route.snapshot.params['id']
      this.faceSnap = this.faceSnapService.getFaceSnapById(snapId)
  }





  onSnapButtonClick (){
      if (this.buttonText === 'Oh Snap!') {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
        this.buttonText = 'Oops, unSnap!';
      } else {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
        this.buttonText = 'Oh Snap!'
      }
  }




}
