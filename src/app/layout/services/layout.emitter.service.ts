import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class LayoutEmitterService {
  private static _emitters: { [Id: string]: EventEmitter<any> } = {};

  static get(Id: string): EventEmitter<any> {
    if (!this._emitters[Id]) 
      this._emitters[Id] = new EventEmitter();
    return this._emitters[Id];
  }
}