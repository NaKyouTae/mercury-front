import { createSelector } from '@ngrx/store';
import { NewsLetterState } from './common.model';


export const commonSeletor = (state: NewsLetterState) => state;

export const selectCommon = createSelector(
  commonSeletor,
  (state: any) => state
);
