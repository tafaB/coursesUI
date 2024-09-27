import Footer from "../components/Footer";
import WelcomeAd from "../components/WelcomeAd";
import WelcomeImg from "../icons/astro-welcome.png";
import CodingImg from "../icons/coding-classes.jpg";
import UserImg from "../icons/profile-pic.jpg";
import Prof1 from "../icons/prof1.jpg";
import Prof2 from "../icons/prof2.jpg";
import Prof3 from "../icons/prof3.jpg";
import Prof4 from "../icons/prof4.jpg";
import Prof5 from "../icons/prof5.jpg";
import Prof6 from "../icons/prof6.jpg";
import Prof7 from "../icons/prof7.jpg";
import Prof8 from "../icons/prof8.jpg";
import AdV1 from "../components/AdV1";
import AdV3 from "../components/AdV3";


const professors = [
    {
        title: "Prof. Bering Tafa",
        description: "Profesor i matematikes, me eksperience 10 vjecare",
        image: Prof2,
    },
    {
        title: "Prof. Zineb Laouzi",
        description: "Profesore e gjeografise, me eksperience 5 vjecare",
        image: Prof1,
    },
    {
        title: "Prof. Xhersila Olldashi",
        description: "Profesore e historise, me eksperience 7 vjecare",
        image: Prof4,
    },
    {
        title: "Prof. Arlind Kacadej",
        description: "Profesore e kimise, me eksperience 3 vjecare",
        image: Prof3,
    },
    {
        title: "Ms. Naime Tafa",
        description: "Profesore e fizikes, me eksperience 6 vjecare",
        image: Prof5,
    },
    {
        title: "Ms. Xhyste Vulaj",
        description: "Profesore e biologjise, me eksperience 4 vjecare",
        image: Prof6,
    },
    {
        title: "Ms. Elvana Gjata",
        description: "Profesore e anglishtes, me eksperience 8 vjecare",
        image: Prof7,
    },
    {
        title: "Ms. Dhurata Dora",
        description: "Profesore e muzikes, me eksperience 2 vjecare",
        image: Prof8,
    }
];


export default function InitialPage() {
    return (
        <div class="font-rajdhani">
            <WelcomeAd
                img={WelcomeImg}
                title={"Përshëndetje!"}
                subTitle={"Astro është faqja më e madhe e kurseve online në Shqipëri dhe mësoni nga më të mirët. Nëse jeni mësues bashkuhuni me ne dhe ndani njohuritë tuaja me studentët tanë."}
            />

            <AdV1
                carouselData={professors}
                title={"Prezantohuni me disa nga pjestarët e mësimdhënies në 9-vjecare"}
                subTitle={"Ju mund të klikoni mbi secilin prej tyre për të mësuar më shumë mbi kurset që ata ofrojnë"}
                breakNum={5}
                bgColour={"bg-base-300"}
            />

            <AdV1
                carouselData={professors}
                title={"Merr pjesë në Olimpiada dhe fito shpërblime nën mentorimin e mësuesve tanë të Olimpiadave"}
                subtitle={"Jeni të ftuar të merrni pjesë në Olimpiadat e shkencave natyrore, matematikes dhe informatikes</p>"}
                breakNum={5}
                bgColour={"bg-base-200"}
            />

            <AdV3
                professor={"Prof. Bering Tafa"}
                backgroundImage={CodingImg}
                profileImage={UserImg}
                title={"Software Development"}
                subTitle={"Mësoni të ndërtoni programe të ndryshme duke përdorur gjuhë programuese si C++, Java, Python, etj. Mësoni të përdorni teknologjitë më të fundit dhe të zhvilloni programe të ndryshme për web, desktop, mobile, etj."}
            />

            <AdV1
                carouselData={professors}
                title={"Kuptoni thellësisht lëndën tuaj me ndihmën e profesorëve tanë të specializuar për niveln Universitar"}
                subTitle={"Ju mund të klikoni mbi secilin prej tyre për të mësuar më shumë mbi kurset që ata ofrojnë"}
                breakNum={5}
                bgColour={"bg-base-200"}
            />
            <Footer />
        </div>

    );
}
