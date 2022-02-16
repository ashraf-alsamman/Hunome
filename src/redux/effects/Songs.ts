import { getSongsAction , SongAction} from '../actions/SongActions';
import { Dispatch } from 'redux';
import { SongsActionType} from '../types/Types';

import Config from '../../config/config.json';
const axios = require('axios');


export const getSongs = () => {

  return function (dispatch: Dispatch<SongsActionType>) {
    axios.get(Config.api+'topsongs/limit=30/json')
    .then(function (response) {
      dispatch(getSongsAction(response.data.feed.entry));
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  };

};

export const getAlbums = () => {

  return function (dispatch: Dispatch<SongsActionType>) {
    axios.get(Config.api+'topalbums/limit=30/json')
    .then(function (response) {
      dispatch(getSongsAction(response.data.feed.entry));
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  };

};

export const Filter = (data) => {

  return function (dispatch: Dispatch<SongsActionType>) {
      
  };

};
 

 






 

 




 