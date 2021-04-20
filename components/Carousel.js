import { Carousel } from "react-bootstrap";

export default function CarouselSlide() {
  return (
    <Carousel className="w-100 p-2">
      <Carousel.Item>
        <img className="d-block w-100" src="imgshare.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="notesapp.PNG" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="vinyl.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="website.PNG" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="smilingschool.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
