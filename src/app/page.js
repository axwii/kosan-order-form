import Image from "next/image";
import Link from "next/link";
import CustomerForm from "./components/CustomerForm";

export default function Home() {
  return (
    <main role="main">
      <header className="text-center my-4">
        <h1 className="text-4xl font-bold mx-4">
          Kosan Gasbestilling
        </h1>
        <p className="text-lg text-gray-700 mt-2 mx-4">
          Velkommen til Kosan Gascenter København og Nordsjælland's gasbestilling
        </p>
      </header>
      <section>
        <CustomerForm />
      </section>
    </main>
  );
}
