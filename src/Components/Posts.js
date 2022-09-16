import Footer from "./Footer";

function Header(props) {
    return (
        <>
            <div className="c-post__header u-space-between-center u-display-flex">

                <div className="u-space-between-center u-display-flex">

                    <img
                        src={props.photo}
                        alt="User Perfil Image"
                    />
                    <h1>{props.name}</h1>

                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>

            </div>
        </>
    );
};


function Post(props) {
    return (
        <>
            <section className="c-post">

                <Header photo={props.urlPerfil} name={props.name} />

                <img src={props.urlPost} alt="Post Image" />

                <Footer liked={props.liked} />

            </section>
        </>
    );
};

export default function Posts() {
    const posts = [
        <Post
            name="ledzeppelin"
            urlPost="https://m.media-amazon.com/images/I/61O+PqSVu8L._AC_SL1024_.jpg"
            urlPerfil="https://www.ledzeppelin.com/sites/g/files/g2000013721/files/sites/default/files/styles/photo_detail_large/public/201809/lz50-iconb.jpg?itok=Ed4TRGP_"
            liked={54789}
        />,
        <Post
            name="theofficialccr"
            urlPost="https://m.media-amazon.com/images/M/MV5BYzMzNjRmM2MtNDZhOC00NjY3LTk3N2MtZTA1ODE3ZjIwMzEwXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
            urlPerfil="https://lastfm.freetls.fastly.net/i/u/500x500/fcbecc41a0de413895eca78872084ac9.jpg"
            liked={10843}
        />,
        <Post
            name="skynyrd"
            urlPost="https://fraze.com/wp-content/uploads/2022/04/LynyrdSkynyrd-800.jpg"
            urlPerfil="https://i.scdn.co/image/ab6761610000e5eb451eb07ddc6e68d3e474c2bf"
            liked={999}
        />
    ];

    return (
        <section className="c-main__posts">
            <ul>
                {posts.map((p) => <li>{p}</li>)}
            </ul>
        </section>
    );
};