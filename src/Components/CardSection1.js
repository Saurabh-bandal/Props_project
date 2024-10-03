import Card from "./Card"

import img1 from '../image/burger.jpeg'
import img2 from "../image/biryani.webp"
import img3 from "../image/cake.jpeg"
import img4 from "../image/mecaroni.jpeg"
import img5 from "../image/nelli.jpeg"
import img6 from "../image/new1.webp"
import img7 from "../image/new2.jpeg"
import img8 from "../image/paneer.jpeg"

function CardSection1() {

    const data = [
        {
            img1: img1,
            title: "Veg Mixer",
            para: "Tomato Salad and Carrot",
            btn: "$ 5.99"
        },
        {
            img2: img2,
            title: "Macroni",
            para: "Cheese Pizza",
            btn: "$ 2.99"
        },
        {
            img3: img3,
            title: "Nelli",
            para: "Hamburger And Fries",
            btn: "$ 7.99"
        },
        {
            img4: img4,
            title: "Jalapeno Poppers",
            para: "Crispy Soyabeans",
            btn: "$ 8.99"
        },
        {
            img5: img5,
            title: "Cajun Chicken",
            para: "Roasted Chicken And Eggs",
            btn: "$ 7.99"
        },
        {
            img6: img6,
            title: "Chillie Cake",
            para: "Deepfried Chicken",
            btn: "$ 2.99"
        },
        {
            img7: img7,
            title: "Guacamole",
            para: "Mexican Chilli",
            btn: "$ 3.99"
        },
        {
            img8: img8,
            title: "Carnet Nacos",
            para: "Chilli Cryspy Nacos",
            btn: "$ 3.99"
        }
    ]
    return (
        <>

            <section className="container my-5">
                   <h1 className="text-center">Checkout Our Menu.</h1>
                <div className="row text-center mt-5">

                    <div className="col-12 col-md-4 col-xl-3 mb-5">
                        <Card image={data[0].img1} title={data[0].title} para={data[0].para} btn={data[0].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[1].img2} title={data[1].title} para={data[1].para} btn={data[1].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[2].img3} title={data[2].title} para={data[2].para} btn={data[2].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[3].img4} title={data[3].title} para={data[3].para} btn={data[3].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[4].img5} title={data[4].title} para={data[4].para} btn={data[4].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[5].img6} title={data[5].title} para={data[5].para} btn={data[5].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[6].img7} title={data[6].title} para={data[6].para} btn={data[6].btn} />
                    </div>

                    <div className="col-12 col-md-4 col-xl-3">
                        <Card image={data[7].img8} title={data[7].title} para={data[7].para} btn={data[7].btn} />
                    </div>

                </div>

            </section>

        </>
    )
}

export default CardSection1;