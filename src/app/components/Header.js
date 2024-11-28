import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex justify-center items-center">
        <Image
          src={"/static/images/KosanGascenterLogo.png"}
          alt="Kosan Gascenter Logo"
          priority
          width={125}
          height={38}
        />
      </div>
    </header>
  );
};

export default Header;