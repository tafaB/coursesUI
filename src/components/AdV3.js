export default function AdV3({ backgroundImage, profileImage, professor, title, subTitle }) {
  return (
    <div className="p-10">
      <div
        className="relative flex  bg-cover text-white overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="relative p-6 lg:w-1/3 md:w-1/2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img src={profileImage} />
            </div>
          </div>
          <p className="block">{professor}</p>
          <h2 className="block text-4xl">Kursi i "{title}"</h2>
          <p className="block text-xl my-5">{subTitle}</p>
          <button className="btn btn-wide">Mësoni më shumë</button>
          <button className="btn btn-wide">Regjistrohu</button>
          <button className="btn btn-wide">Kontakto</button>
          <button className="btn btn-wide">Shiko të gjitha</button>
        </div>
      </div>
    </div>
  );
}
