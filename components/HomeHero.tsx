import Image from "next/image";
import Link from "next/link";

type HomeHeroProps = {
  name: string;
  headline: string;
  location: string;
  photo: string;
  tags: string[];
};

export default function HomeHero({
  name,
  headline,
  location,
  photo,
  tags,
}: HomeHeroProps) {
  return (
    <section className="home-hero panel">
      <div className="home-hero-photo">
        <Image src={photo} alt={`${name} profile`} fill priority sizes="240px" />
      </div>
      <div className="home-hero-copy">
        <span className="home-hero-location">{location}</span>
        <h2>{name}</h2>
        <p>{headline}</p>
        <ul className="hero-tag-list">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="hero-cta-row">
          <Link href="/experience" className="btn btn-primary">
            Explore Experience
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
