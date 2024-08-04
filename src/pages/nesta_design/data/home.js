import homeBanner from "../../../images/designs/home_banner.avif"
import firstImage from "../../../images/designs/nesta_design_100/100.avif"
import secondImage from "../../../images/designs/nesta_design_101/gallery_1_1.avif"
import thirdImage from "../../../images/designs/nesta_design_102/gallery_1_1.avif"
import { DesignMeetAnExpertData } from "./contour"

import meetAnExpertImage from "../../../images/designs/default_meet_an_expert.avif"

const banner = {
    "image":homeBanner,
    "banner_title":"Nestadesign - Where Artistry Meets Designs",
}

const galleryImages = [firstImage,secondImage,thirdImage]

const meetAnExpertdata = {...DesignMeetAnExpertData, "image":meetAnExpertImage}

export const NestaDesignHomePageData = {
    "banner":banner,
    "gallery":galleryImages,
    "meetAnExpert":meetAnExpertdata
}