import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML", level: 100, category: "frontend", logo: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", level: 90, category: "frontend", logo: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", level: 90, category: "frontend", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "Tailwind CSS", level: 80, category: "frontend", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "React.js", level: 80, category: "frontend", logo: "https://cdn.simpleicons.org/react" },
  { name: "Kotlin", level: 80, category: "frontend", logo: "https://cdn.simpleicons.org/kotlin" },
  { name: "React Native", level: 70, category: "frontend", logo: "https://cdn.simpleicons.org/react" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", logo: "https://cdn.simpleicons.org/node.js" },
  { name: "Express", level: 80, category: "backend", logo: "https://cdn.simpleicons.org/express" },
  { name: "MongoDB", level: 80, category: "backend", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "SQL", level: 80, category: "backend", logo: "https://cdn.simpleicons.org/mysql" },
  { name: "Java", level: 90, category: "backend", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg" },
  { name: "Spring Boot", level: 70, category: "backend", logo: "https://cdn.simpleicons.org/spring" },
  { name: "Hibernate", level: 70, category: "backend", logo: "https://cdn.simpleicons.org/hibernate" },
  { name: "FastAPI", level: 75, category: "backend", logo: "https://cdn.simpleicons.org/fastapi" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", logo: "https://cdn.simpleicons.org/github" },
  { name: "Tortoise SVN", level: 80, category: "tools", logo: "https://cdn.simpleicons.org/subversion" },
  { name: "AWS Cloud", level: 60, category: "tools", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Docker", level: 60, category: "tools", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Figma", level: 80, category: "tools", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Framer", level: 75, category: "tools", logo: "https://cdn.simpleicons.org/framer" },
  { name: "VS Code", level: 95, category: "tools", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png" },
  { name: "Android Studio", level: 90, category: "tools", logo: "https://cdn.simpleicons.org/android" },
  { name: "Eclipse IDE", level: 90, category: "tools", logo: "https://cdn.simpleicons.org/eclipseide" },

  // AI Tools
  { name: "Claude Code", level: 95, category: "ai-tools", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claudecode-color.png" },
  { name: "ChatGPT", level: 90, category: "ai-tools", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Codex", level: 85, category: "ai-tools", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/codex-color.png" },
  // { name: "Oracle Chat Assist", level: 80, category: "ai-tools", logo: "https://www.oracle.com/a/ocom/img/rc24v1-oracle-logo.svg" },
  { name: "Gemini", level: 90, category: "ai-tools", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/3840px-Google-gemini-icon.svg.png" },
  { name: "Perplexity", level: 95, category: "ai-tools", logo: "https://logo.svgcdn.com/l/perplexity.png" },
  // { name: "Cline", level: 80, category: "ai-tools", logo: "https://lobehub.com/icons/cline" },
  { name: "Cursor", level: 80, category: "ai-tools", logo: "https://cursor.com/favicon.ico" },

  // Programming Languages
  { name: "C++", level: 95, category: "languages", logo: "https://cdn.simpleicons.org/c++" },
  { name: "Java", level: 90, category: "languages", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg" },
  { name: "Python", level: 85, category: "languages", logo: "https://cdn.simpleicons.org/python" },

  // Courses
  { name: "Data Structures & Algorithms", level: 90, category: "courses", logo: "/projects/SPITlogo.png" },
  { name: "Database Management System", level: 85, category: "courses", logo: "/projects/SPITlogo.png" },
  { name: "Operating Systems", level: 70, category: "courses", logo: "/projects/SPITlogo.png" },
  { name: "Human Machine Interaction", level: 80, category: "courses", logo: "/projects/SPITlogo.png" },
  { name: "Principles of Soft Computing", level: 80, category: "courses", logo: "/projects/SPITlogo.png" },
  { name: "AI & Machine Learning", level: 85, category: "courses", logo: "/projects/SPITlogo.png" },
];

const categories = [
  { id: "all", label: "ALL" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "ai-tools", label: "AI Tools" },
  { id: "languages", label: "Programming Languages" },
  { id: "courses", label: "Courses" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryPage, setCategoryPage] = useState(0);
  const cardsPerPage = 15;
  const categoriesPerPage = 4;

  // Split categories into pages
  const categoryPages = [
    categories.slice(0, 4), // All, Frontend, Backend, Tools
    categories.slice(4), // AI Tools, Programming Languages, Courses
  ];

  const currentCategories = categoryPages[categoryPage];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") {
      return true;
    }
    return skill.category === activeCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredSkills.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedSkills = filteredSkills.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleCategoryPage = () => {
    setCategoryPage(categoryPage === 0 ? 1 : 0);
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons with Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 relative h-12">
          <div
            className={cn(
              "absolute left-0 right-0 flex flex-wrap justify-center items-center gap-3 transition-all duration-500 ease-in-out",
              categoryPage === 0
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full absolute"
            )}
          >
            {categoryPages[0].map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            className={cn(
              "absolute left-0 right-0 flex flex-wrap justify-center items-center gap-3 transition-all duration-500 ease-in-out",
              categoryPage === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full absolute"
            )}
          >
            {categoryPages[1].map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Category Page Navigation */}
          <button
            onClick={toggleCategoryPage}
            className="absolute right-0 p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-300"
            title={categoryPage === 0 ? "Show more categories" : "Show less categories"}
          >
            {categoryPage === 0 ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                currentPage === 1
                  ? "bg-secondary/50 text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-sm font-medium text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                currentPage === totalPages
                  ? "bg-secondary/50 text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
