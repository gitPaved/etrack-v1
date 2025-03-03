import Image from "next/image";

export default function Home() {
  return (
   <div className="flex items-center justify-between flex-col py-10 w-full">
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Prenez le controle <br/> de vos finances
        </h1>
      </div>
    </div>
   </div>
  );
}
