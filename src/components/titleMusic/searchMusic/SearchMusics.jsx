
import "./SearchMusics.css"
import "../../MainLayout/Responsive.css"
import Spinner from "./Spinner.module.css"

import { useSelector, useDispatch } from "react-redux";
import { MusicSearchedPlayed, MusicStatusPlayChanged, selectAllMusics } from "../../../reducers/MusicSlice";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";




const SearchMusics = ({ OpenSearchBox, setOpenSearchBox }) => {


    // Close SearchBox
    const CloseSearchBox = () => {
        setOpenSearchBox(false)
    }

    //initialize useDispatch
    const Dispatch = useDispatch();

    // recived All Musics
    const AllMusics = useSelector(selectAllMusics);

    //states
    const [filtredMusics, setFiltredMusics] = useState({});
    const [DisplayMusics, setDisplayMusics] = useState({});
    const [spinner, setSpinner] = useState(false)


    // auto foucus when is render
    const focus = useRef(null);



    useEffect(() => {
        // start focus
        if (OpenSearchBox) {
            focus.current.focus()
            focus.current.value = "";
        }
        // empty States +
        //debounce
        setTimeout(() => {
            setFiltredMusics({})
            setDisplayMusics({})
        }, 1000)

    }, [OpenSearchBox])


    // search filter
    // recived content from Input
    const recivedInput = (event) => {
        //debounce
        setTimeout(() => {
            setFiltredMusics(event)
        }, 200)
    }

    // button search and Filter by filtredMusics
    const Search = () => {
        setSpinner((pre) => !pre)
        const Filtered = AllMusics.filter((filter) => filter.name.toUpperCase()
            .includes((filtredMusics.toUpperCase())));

        if (filtredMusics.length < 0 || filtredMusics === null) {
            setDisplayMusics({})
            setSpinner(false)
        } else {
            setTimeout(() => {
                setSpinner(false)
                setDisplayMusics(Filtered)
            }, 600)
        }
    }


    //validatio SearchInput
    const validation = [filtredMusics].every(Boolean);


    // send music to PlayerBox by Dispatch and Display Play Icone
    const sendToPlayBox = (musicsId, musics) => {
        //close SearcjBox
        CloseSearchBox()
        //toast dismiss
        toast.dismiss()
        Dispatch(MusicSearchedPlayed(musicsId))
        Dispatch(MusicStatusPlayChanged("play"))
        //toast succses
        toast.success(`"${musics.name}" please wait ...`, {
            autoClose: 5000
        })
    }


    // show Music filtered by search
    const ShowMusicsFiltred = () => {
        return (
            <>
                {
                    DisplayMusics.length > 0 ? DisplayMusics.map((musics) =>
                        <button onClick={() => sendToPlayBox(musics.id, musics)}
                            key={musics.id} className="btn btn-outline-secondary 
                          btnResualtSearch text-white w-100 mt-1 border" >
                            <div className="row" >
                                <div className="col textContentSearch" >{musics.text}</div>
                                <div className="col" >{musics.name}</div>
                            </div>
                        </button>) : DisplayMusics.length === 0 ? (<h1 className="errors">No music</h1>)
                        : <h1 className="errors">Search Musics </h1>
                }
            </>
        )
    }



    return (
        <>

            <div className="col m-0 mb-3 buttonCloseSearchBox " >
                <button className=" btn btn-danger w-25 p-0" onClick={CloseSearchBox}><i className="fa fa-close" ></i></button>
            </div>
            <div className="row mx-1" >
                <input className="form-control p-0 w-50 mx-auto mb-4 text-center" ref={focus}
                    placeholder="Music Name" onChange={(event) => recivedInput(event.target.value)} />
                <div className="col">
                    <button className="btn btn-outline-light w-100 py-0 mx-2"
                        onClick={() => Search()} disabled={!validation}>Search</button>
                </div>
            </div>
            <div className="row serachResult mb-4 mx-1 " >
                <div className="labelserachResult pt-1 mb-1">
                    serachResult
                </div>
                <div className="serachResultContent mt-1 px-2 pt-1" >
                    {spinner ? (<div className={`${Spinner.loader}`}>
                    </div>) : ShowMusicsFiltred()}
                </div>
            </div>

        </>
    )
};


export default SearchMusics;