import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn : 'root'
})

export class FaceSnapsService{

    private faceSnaps : FaceSnap[] = [
        new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          10
        ),
        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          new Date(),
          6
        ).withLocation('à la montagne'),
        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          156
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    
    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
    }
    
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
      const faceSnap : FaceSnap = {
        ...formValue,
        snaps: 0,
        createdAt: new Date(),
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
   

}