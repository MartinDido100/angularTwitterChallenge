import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storagePath = environment.storageUrl

  getFile(file: string): string {
    return `${this.storagePath}/${file}.png`
  }

}
