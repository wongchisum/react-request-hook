import type { Options } from '../types';
import { FetchState } from '../types';
export const DEFAULT_OPTIONS: Options = {
  immediately: true,
};

export const DEFAULT_FETCH_STATE: FetchState<unknown, unknown> = {
  data: null,
  loading: false,
  error: null,
};
