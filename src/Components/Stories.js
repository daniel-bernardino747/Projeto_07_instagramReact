import borderBackground from "../images/stories_background.png"

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
            name="__hp__"
            urlPhoto="https://i.pinimg.com/736x/1a/6b/4c/1a6b4cc069b1b71a5fc6d352b510a6e5.jpg"
        />,
        <Story
            name="hagrid_rub"
            urlPhoto="https://i.pinimg.com/474x/cf/37/34/cf3734a69cdd9b70c052fe9a72cb2f71.jpg"
        />,
        <Story
            name="ronald.w"
            urlPhoto="https://data.whicdn.com/images/348795892/original.jpg"
        />,
        <Story
            name="lu_s2.good"
            urlPhoto="https://i.pinimg.com/originals/69/aa/8c/69aa8c384b2a7086f0b6d1ef3227ae2e.jpg"
        />,
        <Story
            name="lupin_remo"
            urlPhoto="https://i.pinimg.com/originals/72/f5/5f/72f55fdaf943751aec7de8c4c077b4a6.jpg"
        />,
        <Story
            name="gine_potter"
            urlPhoto="https://i.pinimg.com/474x/d3/d6/d2/d3d6d29ffcfaad2ff5e4447e982659dd.jpg"
        />,
        <Story
            name="snape_"
            urlPhoto="https://i.pinimg.com/originals/5b/06/61/5b0661e6a6eb5b5d1c61d0155bec9ee0.jpg"
        />,
        <Story
            name="snuffles_sb"
            urlPhoto="https://i.pinimg.com/736x/fa/16/6e/fa166ee361323806e6f70bafe57b48ef.jpg"
        />
    ];

    return (
        <section className="c-main__stories u-position-relative">
            <ul className="c-stories u-display-flex">
                {items.map(story => <li>{story}</li>)}
            </ul>
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </section>
    )
}