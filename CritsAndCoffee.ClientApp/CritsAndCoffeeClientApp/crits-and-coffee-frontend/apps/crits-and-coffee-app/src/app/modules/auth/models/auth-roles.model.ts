import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
export class GlobalUserRoles {
  public static readonly ROOT: string = 'root';
  public static readonly ADMIN: string = 'admin';
  public static readonly INSTAGRAM_EDITOR: string = 'instagram-read';
  public static readonly QUANT_EDITOR: string = 'quant-read';
}
