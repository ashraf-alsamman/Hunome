import {SONGS_ACTION, GET_SONGS, SongsActionType } from '../types/Types';
import { Songs } from '../interfaces/Song';

export const getSongsAction = (songs: Songs[]): SongsActionType => {
  return {
    type: GET_SONGS,
    payload: songs
  };
};

export const SongAction = (songs: Songs[]): any => {
    return {
      type: SONGS_ACTION,
      payload: songs
    };
};