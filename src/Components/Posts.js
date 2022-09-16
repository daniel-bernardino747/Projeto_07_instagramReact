function Post() {
    return (
        <>
            <section className="c-post">
                <div className="c-post__header u-space-between-center u-display-flex">
                    <div className="u-space-between-center u-display-flex">
                        <img
                            src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                            alt="User Perfil Image"
                        />
                        <h1>rodrigo_faro</h1>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img
                    src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                    alt="User Perfil Image"
                />
                <div className="c-post__footer">
                    <div className="u-space-between-center u-display-flex">
                        <ul className="u-display-flex">
                            <li><ion-icon name="heart-outline"></ion-icon></li>
                            <li><ion-icon name="chatbubble-outline"></ion-icon></li>
                            <li><ion-icon name="paper-plane-outline"></ion-icon></li>
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
            </section>
        </>
    )
}

export default function Posts() {
    const posts = [
        <Post />,
        <Post />,
        <Post />
    ]

    return (
        <section className="c-main__posts">
            <ul>
                {posts.map((p) => <li>{p}</li>)}
            </ul>
        </section>
    )
}