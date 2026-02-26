import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { generateSlug } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return DATA.academicProjects.map((project) => ({
    slug: generateSlug(project.title),
  }));
}

export default function AcademicProjectPage({ params }: Props) {
  const project = DATA.academicProjects.find(
    (p) => generateSlug(p.title) === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              {project.title}
            </h1>
            {project.dates && (
              <time className="text-sm text-muted-foreground">{project.dates}</time>
            )}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Link
          href="/#academicProjects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to coursework
        </Link>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="lg:col-span-2">
          <div className="space-y-6">
            {project.description && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">About</h2>
                <Markdown className="prose dark:prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground">
                  {project.description}
                </Markdown>
              </div>
            )}

            {project.image && (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Project</h2>
                <div className="relative w-full aspect-video bg-muted dark:bg-slate-900 rounded-lg overflow-hidden border border-border/50 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4} className="space-y-8">
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Links</h2>
              <div className="flex flex-col gap-2">
                {project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Badge className="flex gap-2 px-3 py-2 text-sm hover:shadow-md transition-shadow cursor-pointer">
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </BlurFade>
      </div>
    </main>
  );
}
