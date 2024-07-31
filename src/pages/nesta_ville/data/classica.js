import bannerImage from "../../../images/ville/202/banner_11.png"
import characteristics1 from "../../../images/ville/202/characteristics_1.png"
import characteristics2 from "../../../images/ville/202/characteristics_2.png"
import characteristics3 from "../../../images/ville/202/characteristics_3.png"

import comfort1 from "../../../images/ville/202/comfort_1.png"
import comfort2 from "../../../images/ville/202/comfort_2.png"
import comfort3 from "../../../images/ville/202/comfort_3.png"

import temperature1 from "../../../images/ville/202/temperature_1.png"
import temperature2 from "../../../images/ville/202/temperature_2.png"
import temperature3 from "../../../images/ville/202/temperature_3.png"

import secondaryBanner1 from "../../../images/ville/202/banner_2_1.jpg"
import secondaryBanner2 from "../../../images/ville/202/banner_2_2.png"

const banner = {
    "image":bannerImage,
    "banner_title":"Nestaville Series 201 -  Classica",
    "side_title":"Nestaville Series 201 -  Classica",
    "text":"Classica Model combines classical grandeur with modern elegance, featuring symmetrical forms, tall columns, and refined details."
}

const characteristics = {
    "title":"Characteristics",
    "images":[characteristics1, characteristics2,characteristics3],
    "text":"Welcome to the Classica Model, where classical grandeur meets modern sophistication. This design philosophy emphasizes timeless elegance while maintaining a sense of historical depth. Achieved through the use of classical elements like stately columns, grand facades, and intricate details, the model features balanced proportions and refined ornamentation. Every element, from layout to material choice, enhances both visual appeal and cultural resonance, creating a harmonious blend of tradition and luxury."
}

const comfortAnalysis = {
    "title" : "Comfort Analysis",
    "images" : [comfort1, comfort2,comfort3],
    "text":"The Comfort Analysis Report of the Classica Model assesses how well the building design meets occupants' comfort needs while minimizing environmental impact. It evaluates thermal comfort, air quality, lighting, and acoustics, using data from simulations and real-world measurements. The model optimizes building performance for both occupant well-being and sustainability, ensuring a harmonious blend of comfort and eco-friendliness."
}

const temperatureAnalysis = {
    "title":"Operative Temperature Analysis",
    "images" : [temperature1, temperature2,temperature3],
    "text":"The Operative Temperature Analysis of the Classica Model examines how effectively the building design maintains a comfortable indoor temperature while reducing environmental impact. It measures the balance between indoor air temperature and radiant heat, using data from simulations and real-world conditions. This analysis ensures that the model optimizes thermal comfort and energy efficiency, creating a harmonious indoor environment that supports both occupant well-being and sustainability."
}

const secondaryBanners = [
    {
        "title":"Classica - Sectional View",
        "image":secondaryBanner1
    },{
        "title":"Classica - Sectional View",
        "image":secondaryBanner2
    }
]

export const initialClassicaVillaData = {
    "banner":banner,
    "characteristics":characteristics,
    "comfortAnalysis":comfortAnalysis,
    "temperatureAnalysis":temperatureAnalysis,
    "secondaryBanners":secondaryBanners
}