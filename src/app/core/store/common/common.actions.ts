import { props, createAction } from '@ngrx/store';
import { NewsLetterState } from './common.model';

export const inCommonNewsletter = createAction('[Common] Insert Newsletter', props<NewsLetterState>());
