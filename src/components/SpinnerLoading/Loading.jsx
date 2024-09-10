
import "./Loading.css"

import Modal from 'react-modal';



const Loading = () => {


    // Modal custom Styles 
    const customStyles = {
        content: {
            top: '46%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "none",
            border: "none"
        },
    };

    return (
        <Modal style={customStyles} isOpen >
            <div className="container" >
                <div className="row" >
                    <div className="col" >
                        <div className="loader mx-auto"></div>
                    </div>
                </div>
                <div className="row mt-5" >
                    <div className="col  h2" >
                        &nbsp;Player Music
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default Loading;