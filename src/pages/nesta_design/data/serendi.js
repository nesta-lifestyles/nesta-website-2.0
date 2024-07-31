import bannerTestImage from "../../../images/designs/nesta_design_102/banner.png"
import inspiration1 from "../../../images/designs/nesta_design_102/inspiration_1.png"
import inspiration2 from "../../../images/designs/nesta_design_102/inspiration_2.png"
import inspiration3 from "../../../images/designs/nesta_design_102/inspiration_3.png"
import whyToChooseImage from "../../../images/designs/nesta_design_102/why_to_choose.png"
import gallery1 from "../../../images/designs/nesta_design_102/gallery_1_1.png"
import gallery2 from "../../../images/designs/nesta_design_102/gallery_1_2.png"
import gallery3 from "../../../images/designs/nesta_design_102/gallery_1_3.png"

const banner = {
    "image":bannerTestImage,
    "banner_title":"Nesta design Series 101 - Serendi",
    "side_title":"Nesta design Series 101 -  Serendi",
    "text":"Serendi design fuses Japanese simplicity with Scandinavian coziness for a chill, minimalist vibe."
}

const inspirations = {
    "title":"Inspiration",
    "images":[inspiration1,inspiration2,inspiration3],
    "text":"Serendi interior design merges Japanese elegance with Scandinavian warmth, creating a harmonious blend of natural materials like wood and bamboo with clean lines and a muted color palette. It features minimalistic yet functional furniture and emphasizes craftsmanship to achieve a serene and uncluttered ambiance. This design approach results in a timeless living space that promotes relaxation and a deep appreciation for simplicity."
}

const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Elegant Simplicity",
        "Balanced Aesthetics",
        "Functional Simplicity",
        "Natural Materials"
    ]
}

const galleryImages = [gallery1,gallery2,gallery3]

export const initialSerendiDesignData = {
    "banner":banner,
    "inspiration":inspirations,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages
}