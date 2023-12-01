import { useState } from "react";
import ContentCheckbox from "./ContentCheckBox";

const DurationFilter = ({playlistData}) => {
  const [range, setRange] = useState(0);
  const [duration, setDuration] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);


function handleChange(e) {
    setRange(parseInt(e.target.value));
                //1minute
                if(range===0){
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=60000);
                    //console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)} 
                //2 minutes
                else if(range===1){
                    console.log(range)
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=120000);
                    //console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)} 
                //3 minutes  
                else if(range===2){
                    console.log(range)
                    console.log(playlistData.tracks.items)
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=180000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}
                //4minutes  
                else if(range===3){
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=240000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}
                //5minutes  
                else if(range===4){
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=300000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}
                    //6minutes  
                else if(range===5){
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=360000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}
                    //7minutes  
                else if(range===6){
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=420000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}
                    //8minutes
                else if(range===7){
                    console.log(range)
                    console.log(playlistData.tracks.items[0].track.duration_ms)
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=480000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)} 
                    //9minutes    
                else if(range===8){
                    console.log(range)
                    console.log(playlistData.tracks.items[0].track.duration_ms)
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=540000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}    
                    //10minutes    
                else if(range===8){
                    console.log(range)
                    console.log(playlistData.tracks.items[0].track.duration_ms)
                    const selectedTracks = playlistData.tracks.items.filter(
                    (track) => track.track.duration_ms<=600000);
                    console.log(selectedTracks)
                    setFilteredTracks(selectedTracks)}    
                    }
  return (
    <div>
     { console.log(playlistData.tracks.items)}
      <input
        type="range"
        name="duration"
        min="0"
        max="10"
        value={range}
        onChange={(e) => handleChange(e)}
      />
      <p style={{textAlign:"center"}}>{range}min</p>
      <ContentCheckbox playlistData={filteredTracks} />
    </div>
  );
};

export default DurationFilter;
