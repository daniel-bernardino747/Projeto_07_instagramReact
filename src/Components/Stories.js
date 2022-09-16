import borderBackground from '../images/stories_background.png'

function Story(props) {
    return (
        <>
            <div className="u-position-relative">
                <img
                    className="c-stories__border"
                    src={borderBackground}
                    alt="Stories"
                />
                <img
                    className="c-stories__photo"
                    src={props.urlPhoto}
                    alt="Stories"
                />
                <p>{props.name}</p>
            </div>
        </>
    )
}

export default function Stories() {
    const items = [
        <Story
            name='Rodrigo'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Bernardo'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Julio'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Paulo'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Daniel'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Otávio'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='Mestre'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />,
        <Story
            name='João'
            urlPhoto='https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222'
        />
    ]

    return (
        <section className="c-main__stories u-position-relative">
            <ul className="c-stories u-display-flex">
                {items.map(story => <li>{story}</li>)}
            </ul>
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </section>
    )
}