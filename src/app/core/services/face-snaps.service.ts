import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class FaceSnapsService{

    constructor(private http : HttpClient){}

    faceSnaps : FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }
    
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
              ...faceSnap,
              snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
              `http://localhost:3000/facesnaps/${faceSnapId}`,
              updatedFaceSnap)
          )
      );
  }
    adddFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
      const faceSnap : FaceSnap = {
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
        addSnap: function (): void {
        },
        removeSnap: function (): void {
        },
        snap: function (snapType: SnapType): void {
        },
        setLocation: function (location: string): void {
        },
        withLocation: function (location: string): FaceSnap {
          throw new Error("Function not implemented.");
        }
      };
      this.faceSnaps.push(faceSnap);
    }
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
           map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
           map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
           map(previousFacesnap => ({
              ...formValue,
              snaps: 0,
              createdDate: new Date(),
              id: previousFacesnap.id + 1
          })),
          switchMap(newFacesnap => this.http.post<FaceSnap>(
              'http://localhost:3000/facesnaps',
              newFacesnap)
          )
      );
    }

}