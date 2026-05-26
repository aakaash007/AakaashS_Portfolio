import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png",
    link: "#",
  },
  {
    title: "The Web Developer Bootcamp",
    provider: "Udemy",
    logo: "https://cdn.simpleicons.org/udemy",
    link: "#",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative bg-background/90">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Highlighted certifications completed to showcase the most valuable qualifications and training.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 shadow-sm">
                  <img
                    src={cert.logo}
                    alt={cert.provider}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary/70 text-foreground transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
