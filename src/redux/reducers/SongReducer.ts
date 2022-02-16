import {SONGS_ACTION, GET_SONGS, SongsActionType ,GetSongStateType} from '../types/Types';

  
  const initialState: GetSongStateType = {
    songs: []
  };
  
  export const getSongReducer = (
    state = initialState,
    action: SongsActionType
  ): GetSongStateType => {
    switch (action.type) {
      case GET_SONGS:
        return {
          ...state,
          songs: action.payload
        };
      default:
        return state;
    }
  };