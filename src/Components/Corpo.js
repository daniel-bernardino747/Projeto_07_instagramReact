import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";



export default function Corpo() {
    return (
        <section className="c-body">

            <main className="c-main">
                <Stories />
                <Posts />
            </main>

            <SideBar />
        </section>
    );
};