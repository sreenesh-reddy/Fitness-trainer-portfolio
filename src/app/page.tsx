import Image from 'next/image'
import profile from './one.png'


export default function Home() {
    return(
        <>
        <div className='mainpage'>
            <div className='hed'>
        <h1>TRANSFORM YOUR BODY <br/> TRANSFORM YOUR LIFE</h1>
        </div>
        <div className='img'>
        <Image src={profile} 
               alt="VINAY"
                width={300} height={200}> 
            </Image>
            </div>
            </div>
        <div>
        <p>
            hey , i am vinay ,i have been a fitness trainer from past 3 years 
        </p>
        <h2> services overview </h2>
            <li>diet plan</li>
            <li>personal training</li>
            <li>book a session</li>
            <li>ask a doubt</li>
            
            </div></>
    )
}

