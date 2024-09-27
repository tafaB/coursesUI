import Logo from '../icons/astro.svg';
import Prof from '../icons/prof.svg';
import Student from '../icons/student.svg';
import Coins from '../icons/coins.svg';
import ProfilePic from '../icons/profile-pic.jpg';

export default function StudentHeader() {

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <img src={Logo} class="w-10 h-10" />
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a><img src={Prof} class="w-6 h-6" />Profesorët</a></li>
                        <li><a><img src={Student} class="w-6 h-6" />Kurset</a></li>
                        <li><a><img src={Coins} class="w-6 h-6" />Kuleta</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-4xl">Astro</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li class="mx-5 text-xl"><a><img src={Prof} class="w-10 h-10" />Profesorët</a></li>
                    <li class="mx-5 text-xl"><a><img src={Student} class="w-10 h-10" />Kurset</a></li>
                    <li class="mx-5 text-xl"><a><img src={Coins} class="w-10 h-10" />Kuleta</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a>
                    <div class="avatar">
                        <div class="ring-gray-800 ring-offset-base-100 w-12 mr-5 rounded-full ring ring-offset-2">
                            <img src={ProfilePic} />
                        </div>
                    </div>
                </a>
            </div>
        </div>

    );
}
