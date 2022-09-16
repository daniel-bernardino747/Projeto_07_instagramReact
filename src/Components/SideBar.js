function Template(props) {
    return (
        <div className="u-center-x u-display-flex">
            <div>
                <img
                    src={props.image}
                    alt="User Perfil Image"
                />
            </div>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    )
}

function Sugestao(props) {

    const isSuggestion = props.isSuggestion;

    if (isSuggestion) {
        return (
            <div className="u-space-between-center u-display-flex">
                <Template
                    image={props.url}
                    name={props.name}
                    subtitle={props.subtitle}
                />
                <h3>Seguir</h3>
            </div>
        );
    }

    return (
        <Template
            image={props.url}
            name={props.name}
            subtitle={props.subtitle}
        />
    );
}


export default function SideBar() {
    const UsersAccounts = [
        <Sugestao
            isSuggestion={false}
            url="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
            name="Nome Oficial Usuário"
            subtitle="Nome Usuário editável"
        />,
        <Sugestao
            isSuggestion={true}
            url="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
            name="Nome Sugestão"
            subtitle="Nome oficial"
        />,
        <Sugestao
            isSuggestion={true}
            url="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
            name="Nome Sugestão"
            subtitle="Nome oficial"
        />,
        <Sugestao
            isSuggestion={true}
            url="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
            name="Nome Sugestão"
            subtitle="Nome oficial"
        />
    ]

    const currentUser = UsersAccounts.filter(user => user.props.isSuggestion === false);
    const suggestions = UsersAccounts.filter(user => user.props.isSuggestion === true)

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
            </section>
        </div>
    )
}