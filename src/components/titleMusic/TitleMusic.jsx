
import "./TitleMusic.css"
import "../MainLayout/Responsive.css";

import { useDispatch, useSelector } from "react-redux";
import { MusicRepetitioned, selectFilteredPlayedMusic, selectMusicRepetition } from "../../reducers/MusicSlice";
import { toast } from "react-toastify";
import SearchMusics from "./searchMusic/SearchMusics";
import { useState } from "react";


const TitleMusics = () => {

    //initializi useDispatch

    const Dispatch = useDispatch()

    // selectots
    const setPlayingMusic = useSelector(selectFilteredPlayedMusic);
    const StatusRepetition = useSelector(selectMusicRepetition)


    // Open SearchBox
    const [OpenSearchBox, setOpenSearchBox] = useState(false);


    // Music Text
    const ReadyPlayingText = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].text
        } else {
            return <h3>select Music</h3>
        }
    }

    // folderName
    const ReadyPlayingFolderName = () => {
        if (setPlayingMusic.length >= 0 && setPlayingMusic[0]) {
            return setPlayingMusic[0].name
        } else {
            return <h3>select Music</h3>
        }
    }


    // Select Button repartition Music
    const MusicRepartition = () => {
        // disableing toast for reSelect
        toast.dismiss()
        // Activite music repetitione
        Dispatch(MusicRepetitioned())
        // condition when activite and inactive
        if (StatusRepetition) {
            toast.info("repartition Off")
        } else {
            toast.info("repartition On")
        }
    }

    // trun on MusicRepartition 
    const StyleButtonMusicRepartition = () => {
        if (StatusRepetition) {
            return "btn repetition btn-primary mx-2"
        } else {
            return "btn repetition text-white mx-2"
        }
    }

    // changeClass for Open SearchBox
    const classChange = () => {
        if (OpenSearchBox) {
            return "row searchBox searchBox2"
        } else {
            return "row searchBox"
        }
    }

    return (
        <>

            <div className="col box2 " >
                <div className="row" ></div>
                <h2 className=" TitlePlayer text-white mt-3 mb-3">{ReadyPlayingFolderName()}</h2>
                <p className="textMusic text-white"  >
                    <p className="textContent">
                        {ReadyPlayingText()}
                    </p>
                </p>
                <div className="container text-center
                text-white my-3 mt-3 footerTitle">
                    {/* button for active MusicRepartition */}
                    <div className="btn-group" role="group">
                        <button className={StyleButtonMusicRepartition()} z
                            onClick={() => MusicRepartition()} title="repartition" >
                            <i className="fa-solid fa-repeat pt-1" /></button>
                    </div>
                    {/* button for Open SearchBox */}
                    <div className="btn-group" role="group">
                        <button className="btn btnOpenSearchBox pt-2"
                            onClick={() => setOpenSearchBox(true)} title="Search Music (in All Folder)">
                            <i className="fa fa-search text-white" />
                        </button>
                    </div>
                    <div className={classChange()} >
                        <SearchMusics OpenSearchBox={OpenSearchBox} setOpenSearchBox={setOpenSearchBox} />
                    </div>
                </div>
            </div>

        </>
    )
};

export default TitleMusics;