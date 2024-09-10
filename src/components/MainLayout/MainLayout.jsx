// css
import "./mainLayout.css";
import "./Responsive.css";

import { useImmer } from "use-immer";
import { useEffect } from "react";
import { selectStatusLoading, fetchAllbum, fetchMusics } from "../../reducers/MusicSlice";
import { useSelector, useDispatch } from "react-redux";

// Components
import PlayerBox from "../playerBox/PlayerBox";
import TitleMusics from "../titleMusic/TitleMusic";
import PlayList from "../playList/PlayList";
import ImagePlaying from "../titleMusic/imagePlaying/ImagePlaying";
import Loading from "../SpinnerLoading/Loading";

// react-toastify
import { ToastContainer } from "react-toastify";


const MainLayout = () => {


    // State for Open drawer
    const [openList, setOpenList] = useImmer(false)


    // open drawer
    const OpenDrawer = () => {
        setOpenList((draft) => !draft)
    }

    // initialize Dispatch
    const Dispatch = useDispatch()


    // status when ReadyPage
    const status = useSelector(selectStatusLoading);


    useEffect(() => {
        if (status === "none") {
            setTimeout(() => {
                Dispatch(fetchMusics());
                Dispatch(fetchAllbum())
            }, 1000)
        }
    }, [])


    // style for Buttons Drawer List
    const styleButtons = (Display) => {
        if (openList) {
            return { display: `${Display}` }
        }
    }


    return (
        <>
            {status === "none" || status === "Loading" ?
                (<Loading />)
                :
                (
                    <>
                        <ToastContainer position="top-right"
                            autoClose={1300} hideProgressBar={false}
                            newestOnTopfalse closeOnClick draggable theme="dark"
                        />
                        <div className="container AllContent Scroll">
                            <div className="row" >
                                <div className="col">
                                    <div className="container " >
                                        <div className="row row1" >
                                            <div className="col box text-white Scroll"  >
                                                {/* button Open Drawer */}
                                                <button className=" btn btn-secondary buttonListMusics"
                                                    style={styleButtons("none")} onClick={OpenDrawer} > <i className="fa fa-bars" ></i></button>
                                                {/* button close Drawer */}
                                                <button className=" btn btn-secondary buttonCloseListMusics"
                                                    style={styleButtons("inline")} onClick={OpenDrawer} > <i className="fa fa-close" ></i></button>
                                                <ImagePlaying />
                                            </div>
                                            <TitleMusics />
                                        </div>
                                        <div className="row row2 text-white" >
                                            <div className="col text-center borders" >
                                                <PlayerBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PlayList openList={openList} OpenDrawer={OpenDrawer} />
                            </div>
                        </div>

                    </>
                )
            }

        </>
    )
};

export default MainLayout;