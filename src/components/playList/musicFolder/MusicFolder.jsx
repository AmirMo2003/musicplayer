import "../../MainLayout/Responsive.css";
import "./MusicsFolder.css"
import { Link, useLocation } from "react-router-dom";




const MusicFolder = ({ allbums, Id }) => {

     // initialize useLocation
    const Location = useLocation()

    // initialize allbumId
    const AllbumId = allbums.id


    // className for when is Enter the Folder Music 
    const StyleForEnter = () => {
        const preClassName = "card-body cardMusics p-1 bg-dark text-white text-decoration-none";
        if (Location.pathname.includes(Id)) {
            return `${preClassName} EntercardMusics`;
        } else {
            return preClassName;
        }
    }

    return (
        <>
            <div className="allbums" >
                <div className="card cardM" >
                    <Link to={`/MainLayout/musics/${AllbumId}`} className={StyleForEnter()}>
                        {allbums.nameAllbum}
                    </Link>
                </div>
            </div>

        </>)
};

export default MusicFolder;