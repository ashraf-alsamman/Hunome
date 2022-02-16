import { Songs } from '../interfaces/Song';

export const GET_SONGS = 'GET_SONGS';
export const SONGS_ACTION = 'SONG_ACTION';

export interface GetSongStateType {
  songs: Songs[];
}

interface GetSongsActionType {
  type: typeof GET_SONGS;
  payload: Songs[];
}
export type SongsActionType = GetSongsActionType;