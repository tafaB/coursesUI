import Carousel from '../components/Carousel'
import CheckBox from '../components/CheckBox'
import TextBox from '../components/TextBox'
import GoogleIcon from '../icons/google.svg'
import StudyImage0 from '../icons/study0.jpg';
import StudyImage1 from '../icons/study1.jpg';
import StudyImage2 from '../icons/study2.jpg';
import StudyImage3 from '../icons/study3.jpg';
import StudyImage4 from '../icons/study4.jpg';
import EmailIcon from '../icons/email.svg'
import PasswordIcon from '../icons/password.svg'


const loginAdds = [
  {
    title: "Advanced Cameras",
    description: "Selfie-takers. Movie-makers. Boundary-breakers.",
    image: StudyImage0,
  },
  {
    title: "Apple-Designed Chips",
    description: "The kind of fast you can feel.",
    image: StudyImage1,
  },
  {
    title: "Battery",
    description: "The power of great battery life.",
    image: StudyImage2,
  },
  {
    title: "Innovation",
    description: "Beautiful and durable by design.",
    image: StudyImage3,
  },
  {
    title: "Advanced Cameras",
    description: "Selfie-takers. Movie-makers. Boundary-breakers.",
    image: StudyImage4,
  },
  {
    title: "Apple-Designed Chips",
    description: "The kind of fast you can feel.",
    image: StudyImage1,
  },
  {
    title: "Battery",
    description: "The power of great battery life.",
    image: StudyImage2,
  },
  {
    title: "Innovation",
    description: "Beautiful and durable by design.",
    image: StudyImage3,
  }
];
export default function SignIn() {
  return (
    <div className="font-rajdhani bg-transparent h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full items-center">
        <div className="lg:col-span-2 h-full">
          <Carousel carouselData={loginAdds} />
        </div>
        <form className="lg:col-span-1 max-w-lg w-full p-6 mx-auto">
          <div class="mb-8">
            <p className="text-black font-extrabold text-7xl">Astro</p>
            <hr class="w-full border-gray-300 py-5" />
            <h3 class="text-gray-800 text-3xl font-extrabold">Përshendetje!</h3>
            <p class="text-sm mt-4 text-gray-800">
              Nuk keni nje llogari?{' '}
              <a class="link text-black font-semibold">Regjistrohuni</a>
            </p>
          </div>

          <TextBox placeholder="Emaili" type="email" icon={EmailIcon} />
          <TextBox placeholder="Fjalëkalimi" type="password" icon={PasswordIcon} />
          <CheckBox inputLabel={"Kujtoni te dhënat e mia"} />
          <button type="button" class="btn btn-block text-xl">Hyr</button>

          <div class="divider lg:divider-vertical">OR</div>

          <button type="button" class="btn btn-block bg-gray-50 hover:bg-gray-100 text-gray-800 font-thin">
            <img src={GoogleIcon} class="w-6 h-6" alt="google-icon" />
            Përdor llogarinë e Google
          </button>

          <div class="flex my-5 w-full h-full items-center justify-center">
            <p class="text-sm mt-4 text-gray-800">
              Keni harruar fjalëkalimin?{' '}
              <a class="link text-black font-semibold">Klikoni këtu</a>
            </p>
          </div>

        </form>
      </div >
    </div >
  )
}
