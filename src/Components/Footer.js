import { useState } from "react";
import firstLike from "../images/first_liked.jpg";

export default function Footer(props) {
    const [clickedHeart, setClickedHeart] = useState(true);
    const [clickedMark, setClickedMark] = useState(true);
    const [liked, setLiked] = useState(props.liked);

    const changeCount = () => clickedHeart ? setLiked(liked + 1) : setLiked(liked - 1);

    let icons = [
        <IconHeart />,
        <ion-icon name="chatbubble-outline"></ion-icon>,
        <ion-icon name="paper-plane-outline"></ion-icon>
    ];

    function IconHeart() {
        return (
            <div onClick={() => setClickedHeart(!clickedHeart, changeCount())} className="c-post__icon">
                {clickedHeart
                    ? <ion-icon name="heart-outline"></ion-icon>
                    : <ion-icon name="heart" style={{ color: "#ED4957" }}></ion-icon>
                }
            </div>
        );
    };

    function IconMark() {
        return (
            <div onClick={() => setClickedMark(!clickedMark)} className="c-post__icon">
                {clickedMark
                    ? <ion-icon name="bookmark-outline"></ion-icon>
                    : <ion-icon name="bookmark"></ion-icon>
                }
            </div>
        );
    };

    return (
        <div className="c-post__footer">

            <div className="u-space-between-center u-display-flex">

                <ul className="u-display-flex">
                    {icons.map((i) => <li>{i}</li>)}
                </ul>

                <IconMark />

            </div>
            <div className="u-center-x u-display-flex">

                <img src={firstLike} alt="User Perfil Image" />

                <p>
                    Curtido por <b>daniel__bernardino</b> e <b>outras {liked.toLocaleString("pt-BR")} pessoas</b>
                </p>

            </div>

        </div>
    );
};