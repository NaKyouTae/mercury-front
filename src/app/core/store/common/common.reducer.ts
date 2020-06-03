import { createReducer, Action, on } from '@ngrx/store';
import * as commonActtions from './common.actions';
import { InitialState, NewsLetterState } from './common.model';

const commonReducer = createReducer(
  InitialState,
  on(commonActtions.inCommonNewsletter, (state => state))
);

export function reducer(state: NewsLetterState | undefined, action: Action) {
  return commonReducer(state, action);
}
