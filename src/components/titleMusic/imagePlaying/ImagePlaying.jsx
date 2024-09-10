
import "./ImagePlaying.css";
import "../../MainLayout/Responsive.css";

import img from "../../../assets/img.jpg";

import { useSelector } from "react-redux";
import { selectFilteredPlayedMusic, selectAllAllbumes } from "../../../reducers/MusicSlice";

const ImagePlaying = () => {

    // All allbum
    const AllAlbume = useSelector(selectAllAllbumes);
    // Photo of music playing
    const playing = useSelector(selectFilteredPlayedMusic);


    // showe image when play Music
    const imgMusicPlaying = () => {
        if (playing.length >= 0 && playing[0]) {
            const allbumIdPlaying = playing[0].allbum;
            const filteredImg = AllAlbume.filter((allbum) => allbum.id === allbumIdPlaying);
            const readyImg = filteredImg[0].img;
            return (<img src={readyImg} alt="Moein" className="imgPlayer" />);
        } else {
            return (<img src={img} alt="Moein" className="imgPlayerFirst" />);
        }
    };


    return (
        <div>
            {imgMusicPlaying()}
        </div>
    )
}


export default ImagePlaying;