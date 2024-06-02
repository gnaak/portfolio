import { MutableRefObject } from 'react';

export interface refType {
  baseRef? : MutableRefObject<null>;
  skillRef? : MutableRefObject<null>;
  certiRef? : MutableRefObject<null>;
  expRef? : MutableRefObject<null>;
  pjtRef?: MutableRefObject<null>;
}