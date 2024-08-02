
import bannerImage from "../../../images/designs/nesta_design_100/banner.avif"
import inspiration1 from "../../../images/designs/nesta_design_100/inspiration_1.avif"
import inspiration2 from "../../../images/designs/nesta_design_100/inspiration_2.avif"
import inspiration3 from "../../../images/designs/nesta_design_100/inspiration_3.avif"
import whyToChooseImage from "../../../images/designs/nesta_design_100/why_to_choose.avif"
import gallery1 from "../../../images/designs/nesta_design_100/gallery_1_1.avif"
import gallery2 from "../../../images/designs/nesta_design_100/gallery_1_2.avif"
import gallery3 from "../../../images/designs/nesta_design_100/gallery_1_3.avif"


const banner = {
    "image":bannerImage,
    "banner_title":"Nesta design Series 100 - Florence*",
    "side_title":"Nesta design Series 100 - Florence",
    "text":"Discover the lavish elegance of Florence design, where every detail tells a story of opulence and artistry."
}

const inspiration = {
    "title":"Inspiration",
    "images":[inspiration1,inspiration2,inspiration3],
    "text":"Welcome to the Weimar Model, where form and function seamlessly merge. This design philosophy emphasizes practicality while maintaining an elegant, minimalist aesthetic. Achieved through the use of industrial materials like metal, glass, and concrete, the model features clean lines and geometric shapes. Every element, from layout to material choice, enhances both usability and visual appeal, creating a harmonious blend of functionality and design."
}


const whyToChoose = {
    "image":whyToChooseImage,
    "title":"Why Choose Florence",
    "items":[
        "Cherish Historical Significance", "Desire Opulence and Grandeur","Admire Intricate Details",
        "Love Classical Art","Prefer Timeless Elegance","Embrace Cultural Richness"
    ]
}


const galleryImages = [gallery1,gallery2,gallery3]
    
export const initialFlorenceDesignData = {
    "banner":banner,
    "inspiration":inspiration,
    "whyToChoose":whyToChoose,
    "gallery":galleryImages
}