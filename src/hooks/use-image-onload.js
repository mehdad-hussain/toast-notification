import { CSSProperties, useState } from "react";

// interface ImageStyle {
//   thumbnail: CSSProperties
//   fullSize: CSSProperties
// }

// interface ImageOnLoadType {
//   handleImageOnLoad: () => void
//   css: ImageStyle
// }

export function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Triggered when full image will be loaded.
  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const css = {
    // Thumbnail style.
    thumbnail: {
      visibility: isLoaded ? "hidden" : "visible",
      filter: "blur(8px)",
      transition: "visibility 0ms ease-out 500ms",
    },
    // Full image style.
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 500ms ease-in 0ms",
    },
  };

  return { handleImageOnLoad, css };
}

// import { CSSProperties } from 'react'

// import { useImageOnLoad } from 'usehooks-ts'

// export default function Component() {
//   const { handleImageOnLoad, css } = useImageOnLoad()

//   const style: { [key: string]: CSSProperties } = {
//     wrap: {
//       position: 'relative',
//       width: 400,
//       height: 400,
//       margin: 'auto',
//     },
//     image: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: `100%`,
//       height: `100%`,
//     },
//   }

//   return (
//     <div style={style.wrap}>
//       {/* Small image load fast */}
//       <img
//         style={{ ...style.image, ...(css.thumbnail as CSSProperties) }}
//         src="https://via.placeholder.com/150"
//         alt="thumbnail"
//       />
//       {/* Full size image */}
//       <img
//         onLoad={handleImageOnLoad}
//         style={{ ...style.image, ...(css.fullSize as CSSProperties) }}
//         src="https://via.placeholder.com/600"
//         alt="fullImage"
//       />
//     </div>
//   )
// }
