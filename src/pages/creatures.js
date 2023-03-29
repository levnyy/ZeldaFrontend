import Image from "next/image";

export default function IndexPage({characters}) {
  return (
    <div>
        <h1>Zelda{characters}</h1>
        <span><h2> Cucco</h2><img src='Cucco_New.png'/></span>
        <h2> Blupee</h2><img src='Blupee.jpg'/>
        <h2> Blue-Winged Heron</h2><img src='Blue-Winged Heron.png'/>
    </div>
  )
}