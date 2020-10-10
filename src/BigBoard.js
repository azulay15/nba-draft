import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import coleAnthony from "./playersImages/coleAnthony.jpg";
import lameloBall from "./playersImages/lameloBall.jpg";
import anthonyEdwards from "./playersImages/anthonyEdwards.jpg";
import obiToppin from "./playersImages/obiToppin.jpg";
import jamesWiseman from "./playersImages/jamesWiseman.jpg";
import deniAvdija from "./playersImages/deniAvdija.jpg";
import expendArrow from "./playersImages/expendArrow.png";



function BigBoard() {


  const players = [
    {name: 'Anthony Edwards', 
    age: 18, club: 'Gorgia', 
    highet: '6-6', 
    youtube: "https://www.youtube.com/watch?v=zLOYlzDYvBQ", 
    faceImage: anthonyEdwards },
    {name: 'Deni Avdija', 
    age: 19, 
    club: 'Maccabi Tel Aviv', 
    highet: '6-9' , 
    youtube: "https://www.youtube.com/watch?v=SlM6WlHljUw", 
    faceImage: deniAvdija },
    {name: 'Lamelo Ball', 
    age: 18, club: 'Hawks', 
    highet: '6-7', 
    youtube: "https://www.youtube.com/watch?v=PdN6R1t7lOc",
    faceImage: lameloBall },
    {name: 'James Wiseman', 
    age: 19, 
    club: 'Memphis', 
    highet: '7-1', 
    youtube: "https://www.youtube.com/watch?v=MN54K7rLLvI",
    faceImage: jamesWiseman },
    {name: 'Obi Toppin', 
    age: 21, 
    club: 'Dayton', 
    highet: '6-9', 
    youtube: "https://www.youtube.com/watch?v=16PIZd7KU8Q",
    faceImage: obiToppin },
    {name: 'Cole Anthony', 
    age: 20, 
    club: 'North Carolina', 
    highet: '6-3', 
    youtube: "https://www.youtube.com/watch?v=qckrSut_6bM",
    faceImage: coleAnthony }
  ];

  

  return (
    <div className="BigBoard container">
        <h1>Big Board</h1>
        <table class="table table-condensed">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Player</th>
                <th scope="col">Height</th>
                <th scope="col">From</th>
                <th scope="col"></th>
                </tr>
            </thead>
            
                {players.map((player, index) => (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{<img src={player.faceImage} alt="" className="faceImage" />}</td>
                      <td>{player.name}</td>
                      <td>{player.highet}</td>
                      <td>{player.club}</td>
                      <td data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={'#' + index}>{<img src={expendArrow} alt="expend" className="expendArrow"/>}</td>
                    </tr>
                    <tr className="collapse" id={`collapse${index}`}>
                      <td colspan="5">
                        <div className="collapse-data">
                          <img src={player.name} alt="" className="player-image" />
                          <ReactPlayer className="youtube" url={player.youtube}/>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  )

            )}
        </table>
    </div>
  );
}


export default BigBoard;
