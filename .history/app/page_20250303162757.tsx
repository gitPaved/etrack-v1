import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between flex-col py-10 w-full">
      <div>
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Prenez le controle <br /> de vos finances
          </h1>
          <p className="py-6 text-gray-800 text-center">
            Suivez vos budgets et vos depenses <br /> en toute simplicite avec notre application intuitive !
          </p>
          <div>
            <Link href={""} className="btn btn-sm md:btn-md btn-outline btn-accent">Se connecter</Link>
            <Link href={""} className="btn btn-sm md:btn-md ml-2">S'inscrire </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
