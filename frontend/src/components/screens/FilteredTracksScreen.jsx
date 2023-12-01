import Header from "../Header";
import { useLocation } from "react-router-dom";
import FilteredTracksDisplay from "../FilteredTracksDisplay";

const FilteredTracksScreen = ()=>{
    const location = useLocation()
    const filteredTracks = location.state && location.state.filteredTracks;
    console.log(filteredTracks)

return(
    <div >
        <Header/>
        <h2 style={{color:"white"}}>FilteredTracksScreen</h2>
        <FilteredTracksDisplay filteredTracks={filteredTracks}/>
    </div>
)}

export default FilteredTracksScreen;