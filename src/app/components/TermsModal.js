import { useState } from "react";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded"
        >
          X
        </button>
        <h2 className="text-lg font-bold mb-4">Handelsbetingelser</h2>
        <p>
          Velkommen til Kosan Gascenter København-Nordsjælland! Når du handler
          hos os, accepterer du følgende vilkår og betingelser, der gælder for
          brugen af vores hjemmeside og vores services. Vi anbefaler, at du
          læser disse vilkår grundigt.
        </p>

        <h3 className="text-lg font-bold mt-4">1. Generelt</h3>
        <p>
          Disse servicevilkår gælder for alle køb og brug af Kosan Gascenter
          København-Nordsjællands hjemmeside, produkter og ydelser.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Webshoppen ejes og drives af Kosan Gascenter København-Nordsjælland
            (CVR-10027624).
          </li>
          <li>
            Ved at placere en ordre accepterer du de vilkår og betingelser, der
            er gældende på ordretidspunktet.
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4">2. Bestilling</h3>
        <p className="font-semibold">2.1 Placering af ordre</p>
        <ul className="list-disc list-inside">
          <li>
            Når du afgiver en ordre hos os, modtager du en ordrebekræftelse via
            e-mail.
          </li>
          <li>
            Ordren er bindende, når vi har sendt en skriftlig bekræftelse.
          </li>
          <li>
            Vi forbeholder os retten til at annullere ordrer ved mistanke om
            svindel eller fejl i prisangivelser.
          </li>
        </ul>
        <p className="font-semibold">2.2 Produktinformation</p>
        <p>
          Vi bestræber os på at give præcise og opdaterede oplysninger om vores
          produkter. Små variationer i farve, design eller specifikationer kan
          dog forekomme.
        </p>

        <h3 className="text-lg font-bold mt-4">3. Priser og betaling</h3>
        <p className="font-semibold">3.1 Priser</p>
        <ul className="list-disc list-inside">
          <li>
            Alle priser på hjemmesiden er angivet i danske kroner (DKK) excl.
            moms, men ekskl. leveringsomkostninger.
          </li>
          <li>Vi forbeholder os retten til at ændre priser uden varsel.</li>
        </ul>
        <p className="font-semibold">3.2 Betaling</p>
        <p>Vi accepterer følgende betalingsmetoder:</p>
        <ul className="list-disc list-inside">
          <li>Dankort, Visa, MasterCard</li>
          <li>MobilePay</li>
          <li>Betalingen trækkes først fra din konto, når varen er afsendt.</li>
        </ul>

        <h3 className="text-lg font-bold mt-4">4. Levering</h3>
        <p>
          Se vores detaljerede{" "}
          <a href="#" className="text-blue-500 underline">
            Leveringspolitik
          </a>
          .
        </p>
        <ul className="list-disc list-inside">
          <li>Levering sker via egen transportbiler, PostNord og GLS.</li>
          <li>
            Leveringstiden afhænger af valgt metode og vil fremgå ved check-out.
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4">5. Fortrydelsesret</h3>
        <p className="font-semibold">5.1 Returpolitik</p>
        <ul className="list-disc list-inside">
          <li>Som forbruger har du 14 dages fortrydelsesret.</li>
          <li>Fortrydelsesfristen starter fra den dag, du modtager varen.</li>
          <li>
            Kontakt os på{" "}
            <a
              href="mailto:mail@kosan-albertslund.dk"
              className="text-blue-500 underline"
            >
              mail@kosan-albertslund.dk
            </a>{" "}
            eller +45 4362 3020 for returnering.
          </li>
        </ul>
        <p className="font-semibold">5.2 Varer undtaget fortrydelsesretten</p>
        <ul className="list-disc list-inside">
          <li>Varer fremstillet efter kundens specifikationer.</li>
          <li>
            Varer, der af sundheds- eller hygiejnemæssige årsager ikke kan
            returneres, hvis emballagen er brudt.
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4">6. Reklamation</h3>
        <p>
          Hvis du modtager en defekt vare, har du ret til at reklamere inden for
          24 måneder.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Reklamationer skal meddeles til os inden for rimelig tid (senest 2
            måneder efter fejlen opdages).
          </li>
          <li>
            Kontakt os på{" "}
            <a
              href="mailto:mail@kosan-albertslund.dk"
              className="text-blue-500 underline"
            >
              mail@kosan-albertslund.dk
            </a>{" "}
            / +45 4362 3020.
          </li>
          <li>
            Hvis reklamationen er berettiget, dækker vi dine rimelige
            fragtomkostninger.
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4">7. Ansvarsfraskrivelse</h3>
        <ul className="list-disc list-inside">
          <li>
            Vi kan ikke holdes ansvarlige for forsinkelser forårsaget af force
            majeure.
          </li>
          <li>
            Vi er ikke ansvarlige for indirekte tab ved brug af vores produkter.
          </li>
        </ul>

        <h3 className="text-lg font-bold mt-4">8. Brugeradfærd på hjemmesiden</h3>
        <ul className="list-disc list-inside">
          <li>Misbrug af indhold eller funktioner er ikke tilladt.</li>
          <li>
            Handlinger, der kan skade webshoppen eller dens brugere, er forbudt.
          </li>
          <li>Overtrædelser kan medføre juridiske konsekvenser.</li>
        </ul>

        <h3 className="text-lg font-bold mt-4">9. Privatlivspolitik</h3>
        <p>
          Vi værner om dine data. Læs vores fulde{" "}
          <a href="#" className="text-blue-500 underline">
            Privatlivspolitik
          </a>
          .
        </p>

        <h3 className="text-lg font-bold mt-4">10. Ændringer af servicevilkår</h3>
        <p>
          Vi forbeholder os retten til at opdatere og ændre disse vilkår uden
          varsel.
        </p>

        <h3 className="text-lg font-bold mt-4">11. Kontaktoplysninger</h3>
        <ul className="list-disc list-inside">
          <li>Telefon: +45 4362 3020</li>
          <li>
            E-mail:{" "}
            <a
              href="mailto:mail@kosan-albertslund.dk"
              className="text-blue-500 underline"
            >
              mail@kosan-albertslund.dk
            </a>
          </li>
          <li>Adresse: Djursvang 6A, 2620 Albertslund</li>
        </ul>

        <p>Tak for at handle hos Kosan Gascenter København-Nordsjælland!</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Luk
          </button>
        </div>
      </div>
    </div>
  );
}
