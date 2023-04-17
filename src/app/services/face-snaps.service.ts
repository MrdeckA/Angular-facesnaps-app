import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() { }

  FaceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'My first snap',
      description: 'This is my first snap',
      imageUrl: 'https://picsum.photos/1000?random=2',
      createdAt: new Date(),
      snaps: 5,
      location: 'London'
    },
    {
      id: 2,
      title: 'My second snap',
      description: 'This is my second snap',
      imageUrl: 'https://picsum.photos/1000?random=1',
      createdAt: new Date(),
      snaps: 4,
      location: 'London'
    },
    {
      id: 3,
      title: 'My third snap',
      description: 'This is my third snap',
      imageUrl: 'https://picsum.photos/1000?random=3',
      createdAt: new Date(),
      snaps: 6,
      location: 'London'
    },
    {
      id: 4,
      title: 'My fourth snap',
      description: 'This is my fourth snap',
      imageUrl: 'https://picsum.photos/1000?random=4',
      createdAt: new Date(),
      snaps: 2,
      location: 'London'
    },
    {
      id: 5,
      title: 'My fifth snap',
      description: 'This is my fifth snap',
      imageUrl: 'https://picsum.photos/1000?random=5',
      createdAt: new Date(),
      snaps: 10,
      location: 'London'
    },
    {
      id: 6,
      title: 'My sixth snap',
      description: 'This is my sixth snap',
      imageUrl: 'https://picsum.photos/1000?random=6',
      createdAt: new Date(),
      snaps: 4,
      location: 'London'
    },
  ]


  getAllFaceSnaps(): FaceSnap[] {
    return this.FaceSnaps;
  }

  getFaceSnapById(id: number) : FaceSnap{
    const theFaceSnap =  this.FaceSnaps.find(faceSnap => faceSnap.id=id);
    if(!theFaceSnap){
      throw new Error('Face Snap not Found')
    }
    else{
      return theFaceSnap
    }

  }
 


  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const snap = this.getFaceSnapById(id)
    snapType === 'snap' ? snap.snaps ++ : snap.snaps--;    
  }
}


export enum SNAP_TYPES {
  'snap',
  'unSnap'
}