import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from '../../../../assets/banner/img1.jpg';
import Img2 from '../../../../assets/banner/img2.jpg';
import Img3 from '../../../../assets/banner/img3.jpg';
import Img4 from '../../../../assets/banner/img4.jpg';
import Img5 from '../../../../assets/banner/img5.jpg';
import Img6 from '../../../../assets/banner/img6.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={Img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img2} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img3} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img4} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img5} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img6} />
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    );
};

export default Banner;