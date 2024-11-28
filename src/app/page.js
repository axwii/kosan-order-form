import Image from "next/image";
import Link from "next/link";
import CustomerForm from "./components/CustomerForm";

export default function Home() {
  return (
    <main role="main">
      <header className="text-center mt-4">
        <h1 className="text-4xl font-bold">
          Kosan Gasbestilling
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Velkommen til Kosan Gascenter København og Nordsjælland's gasbestilling
        </p>
      </header>
      <section>
        <CustomerForm />
      </section>
    </main>
  );
}
