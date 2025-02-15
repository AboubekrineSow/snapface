import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  //faceSnap!: FaceSnap;
  faceSnap$! : Observable<FaceSnap>;
  buttonText!: string;
  //userHasSnapped!: boolean;
  //snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, 
    private route : ActivatedRoute) {}

    ngOnInit(): void {
      //this.prepareInterface();
      //this.getFaceSnap();
      this.buttonText = 'Oh Snap!';
      const faceSnapId = +this.route.snapshot.params['id'];
      this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
    
    onSnap(faceSnapId: number) {
      if (this.buttonText === 'Oh Snap!') {
          this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
              tap(() => this.buttonText = 'Oops, unSnap!')
          );
      } else {
          this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
              tap(() => this.buttonText = 'Oh Snap!')
          );
      }
    }
  // onSnap(faceSnapId : number): void {
  //   if (this.userHasSnapped) {
  //     this.unSnap(faceSnapId);
  //   } else {
  //     this.snap(faceSnapId);
  //   }
  // }

  // unSnap(faceSnapId : number) {
  //   this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap');
  //   this.buttonText = 'Oh Snap!';
  //   this.userHasSnapped = false;
  // }

  // snap(faceSnapId : number) {
  //   this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap');
  //   this.snapButtonText = 'Oops, unSnap!';
  //   this.userHasSnapped = true;
  // }

  /* 
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }
   */

  

}
