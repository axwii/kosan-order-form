import Image from "next/image";
import Link from "next/link";
import CustomerForm from "./components/CustomerForm";

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
          className="border border-gray-300 rounded-lg object-cover md:w-100 md:h-100"
        />
        <div className="">
          <h2 className="font-bold">5 kg Kosan Gas Light</h2>
          <p>Varenr. 01059</p>
        </div>
      </div>

      <div className="">
        <Image
          src={"/static/images/kosangas-10kg-light.jpg"}
          alt="10 kg Kosan Gas Light"
          width={300}
          height={300}
          className="border border-gray-300 rounded-lg object-cover md:w-100 md:h-100"
        />
        <div className="">
          <h2 className="font-bold">10 kg Kosan Gas Light</h2>
          <p>Varenr. 01060</p>
        </div>
      </div>

      <div className="">
        <Image
          src={"/static/images/kosangas-5kg-click-on.webp"}
          alt="5 kg Kosan Gas Click on"
          width={300}
          height={300}
          className="border border-gray-300 rounded-lg object-cover md:w-100 md:h-100"
        />
        <div className="">
          <h2 className="font-bold">5 kg Kosan Gas Click on</h2>
          <p>Varenr. 01061</p>
        </div>
      </div>

      <CustomerForm />
    </main>
  );
}
