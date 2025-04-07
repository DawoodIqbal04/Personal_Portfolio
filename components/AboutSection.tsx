import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const AboutSection = () => {
  return (
    <section id="about">
      <h1 className="heading">
        This Is {""} <span className="text-purple">Me</span>
      </h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImage={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
