import Link from "next/link"

const AboutUs=()=>{
    return (
        <div>
        <h2>About Us page </h2>
        <ul>
           <li>
            <Link href="/aboutus/1">Yash</Link>
           </li>
           <li>
            <Link href="/aboutus/2">Vaibhav</Link>
           </li>
           <li>
            <Link href="/aboutus/3">Suresh</Link>
           </li>
        </ul>
        </div>
        
    )
}

export default AboutUs