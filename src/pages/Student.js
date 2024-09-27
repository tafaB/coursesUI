import Footer from "../components/Footer";
import StudentHeader from "../components/StudentHeader";
import Prof1 from "../icons/prof1.jpg";
import Prof2 from "../icons/prof2.jpg";
import Prof3 from "../icons/prof3.jpg";
import Prof4 from "../icons/prof4.jpg";
import Prof5 from "../icons/prof5.jpg";
import Prof6 from "../icons/prof6.jpg";
import Prof7 from "../icons/prof7.jpg";
import Prof8 from "../icons/prof8.jpg";
import AdV1 from "../components/AdV1";


const professors = [
    {
        title: "Prof. John Sins",
        description: "Profesor i matematikes, me eksperience 10 vjecare",
        image: Prof2,
    },
    {
        title: "Prof. Lana Rhoades",
        description: "Profesore e gjeografise, me eksperience 5 vjecare",
        image: Prof1,
    },
    {
        title: "Prof. Mia Khalifa",
        description: "Profesore e historise, me eksperience 7 vjecare",
        image: Prof4,
    },
    {
        title: "Prof. James Dee",
        description: "Profesore e kimise, me eksperience 3 vjecare",
        image: Prof3,
    },
    {
        title: "Ms. Lisa Ann",
        description: "Profesore e fizikes, me eksperience 6 vjecare",
        image: Prof5,
    },
    {
        title: "Ms. Sasha Grey",
        description: "Profesore e biologjise, me eksperience 4 vjecare",
        image: Prof6,
    },
    {
        title: "Ms. Mia Malkova",
        description: "Profesore e anglishtes, me eksperience 8 vjecare",
        image: Prof7,
    },
    {
        title: "Ms. Angela White",
        description: "Profesore e muzikes, me eksperience 2 vjecare",
        image: Prof8,
    }
];

export default function Student() {
    return (
        <div class="font-rajdhani">
            <StudentHeader />
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
                bgColour={"bg-base-100"}
            />

            {/* 
            BERING: Nuk punon si duhet ne Safari
            <AdV2
                img1={StudentFemale}
                text1={"Eksploroni mundësitë e të mësuarit me profesorë nga e gjithë Shqipëria"}
                img2={TeacherMale}
                text2={"Largohuni nga monotonia e të mësuarit tradicional dhe përgatituni për të ardhmen tuaj"}
            /> */}

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
