import identity from 'lodash-es/identity';
import {createAction} from 'redux-actions';

export const projectCompiled = createAction(
  'PROJECT_COMPILED',
  identity,
  (_source, timestamp = Date.now()) => ({timestamp}),
);

export const projectCompilationFailed = createAction(
  'PROJECT_COMPILATION_FAILED',
);

export const refreshPreview = createAction('REFRESH_PREVIEW', timestamp => ({
  timestamp,
}));
