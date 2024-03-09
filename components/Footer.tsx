import Image from "next/image"
import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="padding-x flex flex-col gap-20 py-20 items-center lg:items-stretch">
        <div className='flex flex-col items-left lg:flex-row justify-between gap-5'  >

            <div>
                <Image src={"logo.svg"} alt="logo.svg" width={100} height={100} className="object-contain"/>
            </div>

                { footerLinks.map( object => (
                    <div key={object.title} >
                        <h5 className="pb-3 font-bold">{  object.title}</h5>
                        <ul className="flex flex-col gap-3">
                            { object.links.map( link => (
                                <Link key={link.title} href={link.url}>{ link.title }</Link>
                            )) }
                        </ul>
                    </div>
                ))}

            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <p>@2024 CarHub <br />All rights reserved.</p>
                <div className="flex gap-5">
                    <Link href={"#"}>Privacy And Policy</Link>
                    <Link href={"#"}>Terms And Conditions</Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer