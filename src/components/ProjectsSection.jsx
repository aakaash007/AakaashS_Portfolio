import { ArrowRight, ExternalLink, Github } from "lucide-react";
import vibrasenseImg from "@/assets/MajorProjVibrasense.png";
import yelpcampImg from "@/assets/YelpCamp.png";
import snakeImg from "@/assets/SnakeGame.png";
import resumeAnalyser from "@/assets/NLPResumeAnalyser.png";

const projects = [
  // {
  //   id: 1,
  //   title: "SaaS Landing Page",
  //   description: "A beautiful landing page app using React and Tailwind.",
  //   image: "/projects/project1.png",
  //   tags: ["React", "TailwindCSS", "Supabase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 2,
  //   title: "Orbit Analytics Dashboard",
  //   description:
  //     "Interactive analytics dashboard with data visualization and filtering capabilities.",
  //   image: "/projects/project2.png",
  //   tags: ["TypeScript", "D3.js", "Next.js"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 4,
    title: "VibraSense",
    description:
      "Smart IoT enabled Gloves to deliver vibrational braille for the blind-deaf community.",
    image: vibrasenseImg,
    tags: ["IoT", "Websockets", "C", "Arduino", "Hardware"],
    // demoUrl: "",
    githubUrl: "https://github.com/aakaash007/VibraSense",
  },
  {
    id: 5,
    title: "YelpCamp",
    description:
      "Website that allowed social interaction based on campsites that users can post, review, etc.",
    image: yelpcampImg,
    tags: ["React", "MongoDB", "Node.js", "Express", "JavaScript"],
    // demoUrl: "",
    // githubUrl: ,
  },
  {
    id: 6,
    title: "Multiplayer SnakeGame",
    description: "Two player Snake Game, until one remains.",
    image: snakeImg,
    tags: ["Java", "Object-Oriented Programming", "Java Swing"],
    // demoUrl: "",
    githubUrl: "https://github.com/aakaash007/Mutiplayer-SnakeGame",
  },
  {
    id: 7,
    title: "Resume Analyser",
    description:
      "An ML based project wherein users can check the score of their CVs with respect to some particular Job Description of a company.",
    image: resumeAnalyser,
    tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
    // demoUrl: "",
    githubUrl: "https://github.com/aakaash007/ResumeAnalyser",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aakaash007"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
