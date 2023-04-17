import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private faceSnapService : FaceSnapsService){}


  @Input() faceSnap! :  FaceSnap;
  buttonText!: string;


  ngOnInit(): void {
      this.buttonText = 'Oh Snap'
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
