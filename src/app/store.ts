import { tassign } from 'tassign'; 
import { ACCEPT_MOVIE, REJECT_MOVIE, RELOAD} from './actions'; 

export interface IAppState {
  movies: any[];
  likes: number;
  index: number;
}

export const INITIAL_STATE: IAppState = { 
  movies: [],
  likes: 0,
  index: 0
}

function accept(state, action) {
  return tassign(state, {
    movies: state.movies,
    likes: state.likes + 1,
    index: state.index + 1,
  });
}

function reject(state, action) {
  return tassign(state, {
    movies: state.movies,
    likes: state.likes,
    index: state.index + 1,
  });
}

function reload(state, action) {
  return tassign(state, {
    movies: action.data,
    likes: state.likes,
    index: 0,
  });
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ACCEPT_MOVIE: return accept(state, action);
    case RELOAD: return reload(state, action);
    case REJECT_MOVIE: return reject(state, action);
  }

  return state; 
}