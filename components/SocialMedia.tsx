import { Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@AmazonInOfficial",
    icon: <Youtube className="w-5 h-5"/>,
  },
  {
    title: "Github",
    href: "https://github.com/Mamidala-Aakash007",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mamidala-aakash-411a01264/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://join.slack.com/t/aakashdev/shared_invite/zt-3nab2apoi-qdau3oGtq~rRjVVe2t6ZjA",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {SocialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green",
                  iconClassName,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "font-semibold",
                tooltipClassName,
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
