
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const partners = [
  {
    name: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Leading blockchain infrastructure provider"
  },
  {
    name: "Innovative Solutions",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "DeFi protocol development"
  },
  {
    name: "Crypto Ventures",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Strategic investment partner"
  },
  {
    name: "Web3 Labs",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Research and development"
  }
];

const Partners = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Strategic Partners</h2>
          <p className="text-muted-foreground">Collaborating with industry leaders</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="web3-card group h-[300px]">
                    <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
