import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CardContent, CardFooter } from "./ui/card";
import { generateSlug } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  dates: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  technologies: readonly string[]
}

export function SummaryCard({
  title,
  description,
  dates,
  links,
  technologies
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>      
      <CardContent className="mt-auto flex flex-col">
        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies?.map((t) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="outline"
                key={t}
              >
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pb-2 gap-2 flex-wrap">
        <Link href={`/academic-projects/${generateSlug(title)}`}>
          <Badge className="flex gap-2 px-2 py-1 text-[10px] cursor-pointer hover:shadow-md transition-shadow">
            View Details
          </Badge>
        </Link>
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </li>
  );
}
