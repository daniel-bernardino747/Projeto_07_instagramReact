export default function NavBar() {
    const navItens = [
        <ion-icon name="paper-plane-outline"></ion-icon>,
        <ion-icon name="compass-outline"></ion-icon>,
        <ion-icon name="heart-outline" ></ion-icon>,
        <ion-icon name="person-outline"></ion-icon>
    ]

    return (
        <header className="c-page__header u-center-xy u-display-flex">

            <div className="u-width-max-935 u-space-between-center u-display-flex">

                <div className="u-center-xy u-display-flex">

                    <ion-icon name="logo-instagram"></ion-icon>
                    <img
                        src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"
                        alt="Workmark Instagram"
                    />

                </div>

                <forms>
                    <input
                        type="text"
                        placeholder="Pesquisar">
                    </input>
                </forms>

                <ul className="u-display-flex">
                    {navItens.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </header>
    )
}