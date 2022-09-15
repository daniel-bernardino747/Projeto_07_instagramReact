import borderBackground from 'https://github.com/daniel-bernardino747/Projeto_07_instagramReact/blob/main/public/images/stories_background.png'

export default function Stories() {
    const items = [
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>,
        <div className="u-position-relative">
            <img
                className="c-stories__border"
                src={borderBackground}
                alt="Stories"
            />
            <img
                className="c-stories__photo"
                src="https://i.scdn.co/image/ab6761610000e5eb207c6849d1a1f4480e6aa222"
                alt="Stories"
            />
            <p>Nom </p>
        </div>
    ]

    return (
        <section className="c-main__stories">
            <ul className="c-stories u-display-flex">
                {items.map(story => <li>{story}</li>)}
            </ul>
        </section>
    )
}