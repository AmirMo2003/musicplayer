import { Link } from "react-router-dom";
import img from "../../assets/دانلود-آلبوم-ماندگار-از-معین.webp";
import "./AppStyle.css";


const FirstPage = () => {


    return (
        <>
            <div className="container containerFirstPage">
                <div className="card mb-3 b backgroundFirstpage">
                    <img className="card-img-top rounded-5 mt-4" src={img} alt="@n.moein" />
                    <div className="card-body">
                        <h5 className="card-title text-center text-white textOne mt-2 ">Moein</h5>
                        <p className="card-text text-center text-white textTwo">The Best Musics</p>
                        <p className="card-text text-center">
                            <Link to="/MainLayout" className="btn btn-secondary shadow mt-3 mb-3 btnGo" >Go To Player &nbsp;<i className="fa fa-play iconPlayGo" ></i></Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
};

export default FirstPage;