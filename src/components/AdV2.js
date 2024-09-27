export default function AdV2({img1, img2, text1, text2}) {
    return (
        <div class="diff aspect-[16/9]">
            <div class="diff-item-1">
                <img alt="daisy" src={img1} />
                <div class="absolute inset-0 bg-gradient-to-l flex justify-end items-end from-gray-950 to-transparent">
                    <p class="text-white text-2xl p-5 font-bold">
                        {text1.split(" ").map((word, index) => (
                            <span key={index}>
                                {word}{" "}
                                {index === 6 && <br />} {/* Adjust the index to control line breaks */}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div class="diff-item-2">
                <img alt="daisy" src={img2} />
                <div class="absolute inset-0 bg-gradient-to-r flex justify-start items-start from-gray-950 to-transparent">
                    <p class="text-white text-2xl  p-5 font-bold">
                        {text2.split(" ").map((word, index) => (
                            <span key={index}>
                                {word}{" "}
                                {index === 6 && <br />} {/* Adjust the index to control line breaks */}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div class="diff-resizer"></div>
        </div>
    )
}