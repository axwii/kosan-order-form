import Image from "next/image";
import Link from "next/link";
import CustomerForm from "./components/CustomerForm";

export default function Home() {
  return (
    <main role="main">
      <h1 className="text-4xl font-bold text-center mt-4">
        Kosan Gasbestilling
      </h1>
      <p className="text-lg text-gray-700 text-center mt-2">
        Velkommen til Kosan Gascenter København og Nordsjælland's gasbestilling
      </p>
      <CustomerForm />
    </main>
  );
}
