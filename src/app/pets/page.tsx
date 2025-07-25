import Image from "next/image";
import FloatingIcons from "../../components/FloatingIcons";
import { Heart } from "lucide-react";

// Ícones de coração para a página pets
const heartIcons = [
  <Heart
    key="heart"
    className="text-[#9142db] fill-[#9142db] dark:text-[#921CF5] dark:fill-[#921CF5]"
    size={24}
  />
];

interface Pet {
  name: string;
  imageUrl: string;
}

const pets: Pet[] = [
  {
    name: "Jaia",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
  },
  {
    name: "Juno",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
  },
  {
    name: "Mel",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
  },
  {
    name: "Luna",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=620&h=324&fit=crop",
  },
  {
    name: "Laila",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=620&h=324&fit=crop",
  },
  {
    name: "Kali",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=620&h=324&fit=crop",
  },
  {
    name: "Meg",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
  },
];

function PetCard({ name, imageUrl }: Pet) {
  return (
    <div className="flex flex-col overflow-hidden rounded ring-1 ring-zinc-400 dark:ring-zinc-500">
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt={`Photo of ${name}`}
        className="aspect-video object-cover"
      />
    </div>
  );
}

export default function PetsPage() {
  return (
    <>
      <FloatingIcons icons={heartIcons} interval={600} />
      <div className="relative">
        <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
          My Pets
        </h1>
        <div className="grid grid-cols-1 gap-8">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>
      </div>
    </>
  );
}
