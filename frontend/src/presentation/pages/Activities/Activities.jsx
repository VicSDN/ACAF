import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./Activities.css"

const Activities = () => {
    return (
        <div>
            <Header />
            <section className="activityBox">
                <section className="descriptionBox">
                    <h1 className="titleEvents">Actividades</h1>
                    <p className="contentEvents">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem.</p>
                    <p className="contentEvents">Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab  illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem.</p>
                </section>
                <img
                    src="../../../../src/presentation/assets/imgEvents.jpg"
                    alt="Foto fiesta"
                    className="imgEvents"
                />
            </section>
            <Footer />
        </div>
    )
}

export default Activities



