import image1 from "../../assets/carousel/Airplane Ticket.png";
import image2 from "../../assets/carousel/Cart.png";
import image3 from "../../assets/carousel/Page.png";

export const images: string[] = [image1, image2, image3];

const slideByIndex = (index: number): { imageUrl: string; text: string } => {
  const imageUrl = images[index % images.length];

  const texts = [
    "You can book tickets",
    "You can buy groceries",
    "You can pay your bills",
  ];

  const text = texts[index % texts.length];

  return { imageUrl, text };
};

export default slideByIndex;
