import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/MainLayout/MainLayout";
import MusicList from "../components/playList/musicList/MusicList";
import PlayerBox from "../components/playerBox/PlayerBox";



export const RouterPlayer = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Not found !</h1>,

    },
    {
        path: "/MainLayout",
        element: <MainLayout />,
        children: [
            {
                path: "/MainLayout/musics/:AllbumId",
                element: <MusicList />
            },
            {
                path: "/MainLayout/musics/:AllbumId/playerBox",
                element: <PlayerBox />
            }
        ],

    }
], {
    basename: "/Music"
});
