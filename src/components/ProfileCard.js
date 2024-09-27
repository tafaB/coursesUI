export default function ProfileCard({itemData}) {
    return (
        <div class="card bg-black text-white m-5 w-[20rem] h-[30rem] shadow-xl">
            <figure class="relative">
                <img
                    src={itemData.image}
                    alt="Shoes"
                    class="w-full"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{itemData.name}</h2>
                <p>{itemData.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Me tepër</button>
                </div>
            </div>
        </div>
    )
}