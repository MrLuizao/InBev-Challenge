import { Action } from '@ngrx/store';
import { HeroDetailsModel } from 'src/app/Models/hero-details.model';

export const OBJECT_STORE  = '[Set] Object Store';
export const OBJECT_UPDATE  = '[Set] Object Update';


export class SetObject implements Action {
  readonly type = OBJECT_STORE;
  constructor(public payload: HeroDetailsModel) {}
}

export class UpdateObject implements Action {
  readonly type = OBJECT_UPDATE;
  constructor(public payload: HeroDetailsModel) {}
}


export type All = | SetObject  | UpdateObject;
