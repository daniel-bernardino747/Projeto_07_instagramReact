import Usuario from "./Usuario";

function Sugestao(props) {
    return (
        <div className="u-space-between-center u-display-flex">

            <div className="u-center-x u-display-flex">

                <div>

                    <img
                        src={props.url}
                        alt="User Perfil Image"
                    />

                </div>
                <div>

                    <h1>{props.name}</h1>
                    <h2>{props.status}</h2>

                </div>
            </div>

            <h3>Seguir</h3>

        </div>
    );
};


export default function SideBar() {
    const UsersAccounts = [
        <Usuario name="hermione__granger" editName="Hermione Jean Granger" url="https://i.pinimg.com/736x/3d/33/56/3d3356d93d99fae6e15e56d3922750f3.jpg" />,
        <Sugestao name="m_draco667" status="Recente no Instagram" url="http://pm1.narvii.com/7789/b0eda9a23188f88f83fcf1b9eac539943c46babar1-625-625v2_00.jpg" />,
        <Sugestao name="dobby.dobby" status="Segue-te" url="https://pbs.twimg.com/tweet_video_thumb/EoUbBsNWMAAJZfz.jpg" />,
        <Sugestao name="valterDusley1954" status="Recente no Instagram" url="https://pbs.twimg.com/profile_images/1264530941453705217/KvYwo2BF_400x400.jpg" />,
        <Sugestao name="i_know_u" status="Segue-te" url="http://pm1.narvii.com/6304/c5beb000f11bc8302570a036b185bf547f5a2604_00.jpg" />,
        <Sugestao name="lockhart.gil" status="Segue-te" url="http://pm1.narvii.com/6781/856fe0395e217b8cef5ac427987f18b1862cdc45v2_00.jpg" />
    ];

    const currentUser = UsersAccounts.filter(user => user.type.name === "Usuario");
    const suggestions = UsersAccounts.filter(user => user.type.name === "Sugestao");

    return (
        <div className="c-sidebar">

            <section className="c-sidebar__user u-center-x u-display-flex">
                <ul>
                    {currentUser.map(account => <li>{account}</li>)}
                </ul>
            </section>

            <section className="c-sidebar__box-suggestions">

                <div className="u-space-between-center u-display-flex">

                    <h1>Sugestões para você</h1>
                    <h2>Ver tudo</h2>

                </div>
                <div className="c-sidebar__suggestion">

                    <ul>
                        {suggestions.map(account => <li>{account}</li>)}
                    </ul>

                </div>

                <div>
                    <p>
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma
                    </p>

                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>

            </section>

        </div>
    );
};