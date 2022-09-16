import { Injectable } from '@angular/core';
import {User} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public users: User[] = [];

  constructor() { }
}
