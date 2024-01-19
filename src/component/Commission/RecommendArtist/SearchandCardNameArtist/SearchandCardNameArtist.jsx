import React, { useState } from "react";
import "./SearchandCardNameArtist.css";
import { IoIosSearch } from "react-icons/io";
import { GrLike } from "react-icons/gr";
import { BsPersonLinesFill, BsPersonCheckFill } from "react-icons/bs";
import { ArtistUserName } from "./ArtistUserName";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Polygon from "../../../../assets/image/Polygon.png";
import TabFrameBackcard from "../../../../assets/image/tabframebackcard.png";

function SearchandCardNameArtist() {
  const [query, setQuery] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className="SearchandCardNameArtist">
      <div className="SearchNameArtist">
        <IoIosSearch className="searchIcon" />
        <input
          type="text"
          placeholder="ค้นหาชื่อ Artist"
          className="InputSearchNameArtist"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="CardNameArtist" onClick={flipCard}>
          <ul className="ListNameArtist">
            {ArtistUserName.filter(
              (artistname) =>
                artistname.first_name
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                artistname.last_name.toLowerCase().includes(query.toLowerCase())
            ).map((artistname) => (
              <li className="NameArtist" key={artistname.id}>
                <div className="CardArtist">
                  <div className="CardImageArtist">
                    <img
                      className="ArtistImage"
                      src={artistname.image}
                      alt={artistname.first_name}
                    />
                  </div>

                  <div className="CardTextNameArtist">
                    {artistname.first_name} {artistname.last_name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="CardBackArtist" onClick={flipCard}>
          <ul className="BackListNameArtist">
            {ArtistUserName.map((artistname) => (
              <li className="BackNameArtist" key={artistname.id}>
                <div className="BackCardArtist">
                  <div className="BackCardTextNameArtist">
                    {artistname.first_name} {artistname.last_name}
                    
                  </div>

                  <div className="BackCardImageArtist">
                    <img
                      className="BackPolygonImage"
                      src={Polygon}
                      alt=""
                    ></img>
                    <img
                      className="BackArtistImage"
                      src={artistname.image}
                      alt={artistname.first_name}
                    />
                  </div>

                  <div className="BackCardTextFollowArtist">
                    <BsPersonLinesFill /> {artistname.follower} follower <br />
                    <BsPersonCheckFill /> {artistname.following} following{" "}
                    <br />
                    <GrLike /> {artistname.likes} likes
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="LinkToAboutMePage">
            <Link to='/AboutEmmaPage' className="LinkToAboutEmma">about me</Link>
            <Link to='/AboutLiamPage' className="LinkToAboutLiam">about me</Link>
            <Link to='/AboutOliverPage' className="LinkToAboutOliver">about me</Link>
            <Link to='/AboutSophiaPage' className="LinkToAboutSophia">about me</Link>
            <Link to='/AboutWilliamPage' className="LinkToAboutWilliam">about me</Link>
            <Link to='/AboutAshleyPage' className="LinkToAboutAshley">about me</Link>
            <Link to='/AboutHenryPage' className="LinkToAboutHenry">about me</Link>
            <Link to='/AboutRondaPage' className="LinkToAboutRonda">about me</Link>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default SearchandCardNameArtist;
