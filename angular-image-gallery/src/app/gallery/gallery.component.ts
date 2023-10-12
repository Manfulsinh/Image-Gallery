import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [];
  selectedImage?: string;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage(): void {
    if (this.selectedImage) {
      this.images.push(this.selectedImage);
      this.selectedImage = undefined;
    }
  }

  deleteImage(index: number): void {
    this.images.splice(index, 1);
  }
}
