import Image from "next/image";
import Link from "next/link";
import CustomerForm from "./components/CustomerForm";

export default function Home() {
  return (
    <main className="">
      <title className="">Kosan Gasbestilling</title>
      <sub>Velkommen til gasbestilling</sub>
      <p>Her kan du bestille gas til... </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 items-center justify-items-center">
        <div className="">
          <Image
            src={"/static/images/kosangas-5kg-light.jpg"}
            alt="5 kg Kosan Gas Light"
            width={300}
            height={300}
            className="border border-gray-300 rounded-lg object-cover md:w-100 md:h-100"
          />
          <div className="">
            <h1 className="font-bold">5 kg Kosan Gas Light</h1>
            <p>Varenr. 01059</p>
            <input
              type="number"
              name="kosangas5kg"
              placeholder="Antal"
              min="0"
              className="border border-gray-300 rounded w-20 py-1 px-2"
            />
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
            <h1 className="font-bold">10 kg Kosan Gas Light</h1>
            <p>Varenr. 01060</p>
            <input
              type="number"
              name="kosangas10kg"
              placeholder="Antal"
              min="0"
              className="border border-gray-300 rounded w-20 py-1 px-2"
            />
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
            <h1 className="font-bold">5 kg Kosan Gas Click on</h1>
            <p>Varenr. 01061</p>
          </div>
          <input
            type="number"
            name="kosangas5kgClickOn"
            placeholder="Antal"
            min="0"
            className="border border-gray-300 rounded w-20 py-1 px-2"
          />
        </div>
      </div>

      <CustomerForm />
    </main>
  );
}
