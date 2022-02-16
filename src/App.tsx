import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, getAlbums } from "./redux/effects/Songs";
import { Songs } from "./redux/interfaces/Song";
import { AppState } from "./redux/store";
import Switch from "react-switch";
import CircularProgress from '@mui/material/CircularProgress';

export const App: React.FC = () => {
  const [opener, setOpener] = useState(true);
  const [query, setQuery] = useState("");
  const [noData, setnoData] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    value ? setOpener(true) : setOpener(false);
  };

  const songs = useSelector((state: AppState) => state.songs);

  useEffect(() => {
    if (opener) {
      dispatch(getSongs());
    } else {
      dispatch(getAlbums());
    }
  }, [dispatch, opener]);


  useEffect(() => {
 
    setnoData(true);
 
      
    
  }, [ ]);  

  const Items =  songs.songs
    .filter((data) => {
      if (query === "") {
        return data;
      } else if (
        data["im:name"]?.label?.toLowerCase().includes(query.toLowerCase())
      ) {
        
        return data;
      }
      
    })
    .map((data: any, index) => (
      <tr>
        <td className="align-middle">
          <img src={data["im:image"][0]?.label} />
        </td>
        <td className="align-middle">{data["im:name"]?.label}</td>
        <td className="align-middle">{data["im:artist"]?.label}</td>
        <td className="align-middle">{data["im:price"]?.label}</td>
      </tr>
    ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <label htmlFor="small-radius-switch">
          <br />
          <br />
          <br />

            <h3>
              {opener ? "Songs" : "Albums"}{" "}
              <span className="opener">Choose between songs or albums</span>
            </h3>
            <Switch
              checked={opener}
              onChange={handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </label>

          <br />
          <div className="input-group mb-3">
              <input
                type="text"
                onChange={(event) => setQuery(event.target.value)}
                className="form-control"
                placeholder="Enter song or artist name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
            </div>
          <div className="table_con">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="align-middle"> Title </th>
                  <th className="align-middle"> </th>
                  <th className="align-middle"> Artist </th>
                  <th className="align-middle"> Price </th>
                </tr>
              </thead>
              <tbody>{ Items.length>0 ?Items: noData?Items: <CircularProgress />}</tbody>
            </table>
          </div>
          <>
            <br />
            {/* <div> */}
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
