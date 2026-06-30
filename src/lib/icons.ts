import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  ClipboardList,
  Clock,
  Code2,
  FileDown,
  FolderKanban,
  Gamepad2,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Rocket,
  Search,
  Settings,
  Star,
  TrendingUp,
  Trophy,
  Workflow,
  Zap
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  workflow: Workflow,
  "layout-dashboard": LayoutDashboard,
  "bar-chart-3": BarChart3,
  "trending-up": TrendingUp,
  "clipboard-list": ClipboardList,
  settings: Settings,
  "code-2": Code2,
  zap: Zap,
  briefcase: Briefcase,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  clock: Clock,
  linkedin: Linkedin,
  github: Github,
  "gamepad-2": Gamepad2,
  "file-down": FileDown,
  printer: Printer,
  trophy: Trophy,
  rocket: Rocket,
  star: Star
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Zap;
}

export const abilityAccents = ["#4dd8ff", "#ff6b6b", "#66e080", "#ffd166", "#ff8ad8"];
export const achievementIcons = ["trophy", "rocket", "zap", "star"] as const;
