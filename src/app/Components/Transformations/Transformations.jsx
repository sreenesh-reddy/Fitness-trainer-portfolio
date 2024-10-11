// "use client"
// import styles from "./style.module.scss"
// import Image from 'next/image'
// import vinbefore from './vinbefore.jpg'
// import vinafter from './vinafter.jpg'
// import clientbefore from './clientbefore.jpg'
// import clientafter from './clientafter.jpg'
// import { useEffect, useState, useRef } from "react"
// import trans3 from './trans3.jpg'
// import trans4 from './trans4.jpg'
// import trans5 from './trans5.jpg'
// import trans6 from './trans6.jpg'
// import trans7 from './trans7.jpg'
// import transb3 from './transb3.jpg'
// import transb4 from './transb4.jpg'
// import transb5 from './transb5.jpg'
// import transb6 from './transb6.jpg'
// import transb7 from './transb7.jpg'
// import { easeInOut } from "framer-motion"




// const imagePairs = [

//   { image1: trans3, image2: transb3 },
//   { image1: trans4, image2: transb4 },
//   { image1: vinbefore, image2: vinafter },
//   { image1: clientbefore, image2: clientafter },
//   { image1: trans5, image2: transb5 },
//   { image1: trans6, image2: transb6 },
//   { image1: trans7, image2: transb7 },

// ];

// export default function Transformations() {

//   const [currentImages, setCurrentImages] = useState(imagePairs.map(pair => pair.image1));



//   useEffect(() => {
//     // Alternating images for flicker effect
//     const flickerInterval = setInterval(() => {
//       setCurrentImages(prevImages =>
//         prevImages.map((img, index) =>
//           img === imagePairs[index].image1 ? imagePairs[index].image2 : imagePairs[index].image1
//         )
//       );
//     }, 1300); // Adjust flicker speed here (1000ms = 1 second)

//     return () => clearInterval(flickerInterval);
//   }, []);

//   // const [imgprofile, setip] = useState(vinbefore)
//   // const imgarray = [vinbefore, vinafter]
//   // const [i, seti] = useState(0);
//   // useEffect(() => {
//   //     setTimeout(() => {
//   //         if (i === imgarray.length - 1) {
//   //             seti(0);
//   //         }
//   //         else {
//   //             seti(i + 1);
//   //         }
//   //         setip(imgarray[i]);
//   //     }, 1500)
//   // }, [i])

//   // const [imgprofile2, setip2] = useState(clientbefore)
//   // const imgarray2 = [clientbefore, clientafter]
//   // const [i2, seti2] = useState(0);
//   // useEffect(() => {
//   //     setTimeout(() => {
//   //         if (i2 === imgarray2.length - 1) {
//   //             seti2(0);
//   //         }
//   //         else {
//   //             seti2(i2 + 1);
//   //         }
//   //         setip2(imgarray2[i2]);
//   //     }, 1500)
//   // }, [i2])





//   return (
//     <div className={styles.body}>
//       <div className={styles.mainpage} >

//         {/* <div className={styles.heading}>
//                     <h3 id="Transformations">TRANSFORMATIONS</h3><br/>
//                 </div> */}

//         <div className={styles.slider}>

//           <div className={styles.slidetrack}
//           >
//             {currentImages.map((img, index) => (
//               <div key={index} className={styles.imgcontainer}>

//                 <Image src={img} alt='' width={300}
//                   height={400}
//                   style={{ minWidth: "50%", minHeight: "100%" }} className={styles.Image} />
//               </div>
//             ))}





//             {/* <Image src={imgprofile} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                         </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile2} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                */}
//           </div>









//           {/* 
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                         </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile2} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                 </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                         </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile2} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                 </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                         </div>
//                 <div className={styles.imgcontainer}>
//                     <Image src={imgprofile2} alt="tans" width={300}
//                     height={400}
//                         style={{ minWidth: "50%", minHeight: "100%", borderRadius: "50px" }} className={styles.Image} />
//                 </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"
import styles from "./style.module.scss"
import Image from 'next/image'
import vinbefore from './vinbefore.jpg'
import vinafter from './vinafter.jpg'
import clientbefore from './clientbefore.jpg'
import clientafter from './clientafter.jpg'
import { useEffect, useState } from "react"
import trans3 from './trans3.jpg'
import trans4 from './trans4.jpg'
import trans5 from './trans5.jpg'
import trans6 from './trans6.jpg'
import trans7 from './trans7.jpg'
import transb3 from './transb3.jpg'
import transb4 from './transb4.jpg'
import transb5 from './transb5.jpg'
import transb6 from './transb6.jpg'
import transb7 from './transb7.jpg'

const imagePairs = [
  [trans3,transb3 ],
  [ transb4,trans4],
  [ vinbefore, vinafter ],
  [clientbefore,  clientafter ],
  [ transb5,trans5   ],
  [  transb6,trans6   ],
  [   transb7, trans7 ],
];

export default function Transformations() {
  // This state will track which image to show (before or after) for each pair
  const [state,setState]= useState(0)

const toggle = ()=>{
  if(state==1){
    setState(0);
  }else{
    setState(1);
  }
}
 

  return (
    <div className={styles.body}>
      <div className={styles.mainpage}>
        <div className={styles.imageGrid}>
          {imagePairs.map((pair, index) => (
            <div key={index} className={styles.imgcontainer}>
              <Image
                src={pair[state]}
                alt="Transformation Image"
                width={200}
                height={300}
                className={styles.image}
              />
              
            </div>
          ))}
        </div>
        <div className={styles.button} onClick={()=>toggle()} >
                        SHOW TRANSFORMATION
          </div>
      </div>
    </div>
  );
}
