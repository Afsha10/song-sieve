import { useState, useEffect } from "react"

const CyfRecommendation = () => {
    const[recommendationList, setRecommendationList] = useState([]);

    useEffect(() => {
      fetch("https://song-sieve-server.onrender.com/tracks")
        .then((res) => res.json())
        .then((data) => {
          setRecommendationList(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
      <div className="cyf_list">
        <p>
          <strong>Tracks</strong>
        </p>
        <div className="tracks">
        {recommendationList.map((track) => (
          <li key={track.id}>
            <p>
              <strong>Recommended by :</strong>
              {track.recommender_name}
            </p>
            <p><strong>Track:</strong>{track.track_name}</p>
            <p>
              <strong>Artist:</strong>
              {track.artist_name}
            </p>
          </li>
        ))}
        </div>
      </div>
    );
}

export default CyfRecommendation;