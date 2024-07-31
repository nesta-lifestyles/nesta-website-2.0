
import bannerImage from "../../../images/designs/nesta_design_101/101.png"
import inspiration1 from "../../../images/designs/nesta_design_101/inspiration_1.png"
import inspiration2 from "../../../images/designs/nesta_design_101/inspiration_2.png"
import inspiration3 from "../../../images/designs/nesta_design_101/inspiration_3.png"
import whyToChooseImage from "../../../images/designs/nesta_design_101/why_to_choose.png"
import gallery1 from "../../../images/designs/nesta_design_101/gallery_1_1.png"
import gallery2 from "../../../images/designs/nesta_design_101/gallery_1_2.png"
import gallery3 from "../../../images/designs/nesta_design_101/gallery_1_3.png"



const banner = {
    "image":bannerImage,
    "banner_title":"Nesta design Series 100 - Equinox",
    "side_title":"Nesta design Series 101 -  Equinox",
    "text":"Equinox interior design creates a calm, minimalist space with earthy tones and natural elements for ultimate relaxation."
}

const characteristics = {
    "title":"Inspiration",
    "images":[inspiration1,inspiration2,inspiration3],
    "text":"Equinox interior design focuses on creating serene, harmonious spaces with simplicity, clean lines, and a muted color palette. By integrating natural materials like wood and stone and maximizing natural light, it fosters a sense of calm and balance through minimalistic furnishings and uncluttered layouts, promoting inner peace and well-being."
}


const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Serenity and Balance", 
        "Soothing Color Palettes",
        "Natural Materials",
        "Warm and Calming Space"
    ]
}


const galleryImages = [gallery1, gallery2,gallery3]

export const initialEquinoxDesignData = {
    "banner":banner,
    "inspiration":characteristics,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages
}