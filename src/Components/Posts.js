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
    )
}

function Footer() {
    const icons = [
        <ion-icon name="heart-outline"></ion-icon>,
        <ion-icon name="chatbubble-outline"></ion-icon>,
        <ion-icon name="paper-plane-outline"></ion-icon>
    ]

    return (
        <>
            <div className="c-post__footer">
                <div className="u-space-between-center u-display-flex">
                    <ul className="u-display-flex">
                        {icons.map((i) => <li>{i}</li>)}
                    </ul>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="u-center-x u-display-flex">
                    <img
                        src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                        alt="User Perfil Image"
                    />
                    <p>Curtido por <b>daniel__bernardino</b> e <b>outras 345 pessoas</b></p>
                </div>
            </div>
        </>
    )
}

function Post(props) {
    return (
        <>
            <section className="c-post">
                <Header
                    photo={props.urlPerfil}
                    name={props.name}
                />
                <img
                    src={props.urlPost}
                    alt="Post Image"
                />
                <Footer />
            </section>
        </>
    )
}

export default function Posts() {
    const posts = [
        <Post
            name='daniel__bernardino'
            urlPost='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
            urlPerfil='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Post
            name='daniel__bernardino'
            urlPost='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
            urlPerfil='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Post
            name='daniel__bernardino'
            urlPost='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
            urlPerfil='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />
    ]

    return (
        <section className="c-main__posts">
            <ul>
                {posts.map((p) => <li>{p}</li>)}
            </ul>
        </section>
    )
}