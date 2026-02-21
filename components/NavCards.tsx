import Link from "next/link";
import IconGlyph from "@/components/IconGlyph";

type NavCard = {
  href: string;
  title: string;
  icon: string;
};

type NavCardsProps = {
  items: NavCard[];
};

export default function NavCards({ items }: NavCardsProps) {
  return (
    <section className="visual-section">
      <div className="section-header">
        <h2>Navigate Portfolio</h2>
      </div>
      <div className="nav-card-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="panel nav-card" prefetch>
            <IconGlyph name={item.icon} className="nav-card-icon" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
