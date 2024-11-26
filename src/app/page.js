import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className="">Gasbestilling</h1>
      <sub>Velkommen til gasbestilling</sub>
      <p>Her kan du bestille gas til </p>

      <div className="">
        <Image
          src={"/static/images/kosangas-5kg-light.jpg"}
          alt="5 kg Kosan Gas Light"
          width={300}
          height={300}
          className="rounded-lg border border-[#CAC4D0] object-cover"
        />
        <h2>5 kg Kosan Gas Light</h2>
        <p>Varenr. 01059</p>
      </div>
    </main>
  );
}
