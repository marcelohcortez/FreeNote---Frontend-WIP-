import { State } from 'types/state';
import { Action } from 'types/action';

interface AuthContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export type { AuthContext };
