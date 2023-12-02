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
            <li  className = "track_list" key={track.id}>
              <iframe src={track.iframe_url} width="280" height="100"></iframe>
              <div className="card">
              <img
                src={track.image_url}
                alt={`track Cover`}
                width="100"
                height="200"
              />
              <div className="track_info">
              <p>
                <strong>Recommended by :</strong>
                {track.recommender_name}
              </p>
              <p>
                <strong>Track:</strong>
                {track.track_name}/
              </p>
              <p>
                <strong>Artist:</strong>
                {track.artist_name}
              </p>
              </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
}

export default CyfRecommendation;