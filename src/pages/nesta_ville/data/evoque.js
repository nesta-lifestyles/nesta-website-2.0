import bannerImage from "../../../images/ville/102/banner_11.png"
import characteristics1 from "../../../images/ville/102/characteristics_1.png"
import characteristics2 from "../../../images/ville/102/characteristics_2.png"
import characteristics3 from "../../../images/ville/102/characteristics_3.png"
import secondaryBanner1 from "../../../images/ville/102/banner_2_1.png"



const banner = {
    "image":bannerImage,
    "banner_title":"Nestaville Series 202 -  Arcadia",
    "side_title":"Nestaville Series 202 -  Arcadia",
    "text":"Arcadia Model creates timeless, harmonious living spaces with horizontal lines, natural materials, and open, flowing interiors that foster a deep connection to the landscape."
}

const characteristics = {
    "title":"Characteristics",
    "images":[characteristics1, characteristics2,characteristics3],
    "text":"The Arcadia Model emphasizes creating a harmonious, timeless living environment with horizontal lines and low-pitched roofs that integrate seamlessly with nature. It features open, flowing interiors and natural materials like wood and stone, providing warmth and texture while promoting a cozy, uncluttered ambiance. This design approach enhances comfort, well-being, and a strong connection to the surrounding landscape, inspired by simplicity and functionality."
}

const secondaryBanners = [
    {
        "title":"Arcadia - Sectional View",
        "image":secondaryBanner1
    }
]


export const initialEvoqueVillaData = {
    "banner":banner,
    "characteristics":characteristics,
    "secondaryBanners":secondaryBanners
}