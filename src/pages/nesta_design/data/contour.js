import bannerImage from "../../../images/designs/nesta_design_103/banner.png"
import inspiration1 from "../../../images/designs/nesta_design_103/inspiration_1.png"
import inspiration2 from "../../../images/designs/nesta_design_103/inspiration_2.png"
import inspiration3 from "../../../images/designs/nesta_design_103/inspiration_3.png"
import whyToChooseImage from "../../../images/designs/nesta_design_103/why_to_choose.png"
import gallery1 from "../../../images/designs/nesta_design_103/gallery_1_1.png"
import gallery2 from "../../../images/designs/nesta_design_103/gallery_1_2.png"
import gallery3 from "../../../images/designs/nesta_design_103/gallery_1_3.png"

const banner = {
    "image":bannerImage,
    "banner_title":"Nesta design Series 103 -  Contour",
    "side_title":"Nesta design Series 103 -  Contour",
    "text":"Contour design combines sleek lines, neutral colors, and functional elegance to create modern, uncluttered spaces."
}

const characteristics = {
    "title":"Inspiration",
    "images":[inspiration1, inspiration2,inspiration3],
    "text":"Contour interior design combines sleek, modern aesthetics with functional elegance, creating a dynamic and visually striking environment. It features clean lines, innovative materials, and a neutral color palette, complemented by minimalist yet practical furniture. Emphasizing open spaces and natural light, contemporary design achieves a balanced and uncluttered ambiance. This approach results in a timeless and sophisticated living space that enhances daily life with a fresh, modern flair."
}

const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Modern Aesthetics", 
        "Functional Elegance",
        "Neutral Palette",
        "Open and Light"
    ]
}

const galleryImages = [gallery1,gallery2, gallery3]

export const initialContourDesignData = {
    "banner":banner,
    "inspiration":characteristics,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages
}