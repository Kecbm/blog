import FloatingIcons from "../../components/FloatingIcons";
import PetCarousel from "../../components/PetCarousel";
import { Heart } from "lucide-react";

// Ícones de coração para a página pets
const heartIcons = [
  <Heart
    key="heart"
    className="text-[#9143da] fill-[#9143da] dark:text-[#c37cff] dark:fill-[#c37cff]"
    size={24}
  />
];

interface Pet {
  name: string;
  images: string[];
}

const pets: Pet[] = [
  {
    name: "Jaia",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Juno",
    images: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Mel",
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Luna",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Laila",
    images: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Kali",
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=620&h=324&fit=crop",
    ],
  },
  {
    name: "Meg",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=620&h=324&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=620&h=324&fit=crop",
    ],
  },
];



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
            <PetCarousel key={pet.name} name={pet.name} images={pet.images} />
          ))}
        </div>
      </div>
    </>
  );
}
