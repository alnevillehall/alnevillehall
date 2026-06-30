import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { getResumeFocusConfig, parseResumeFocus, portfolioData } from "@/lib/data";

type ResumePageProps = {
  searchParams: Promise<{ focus?: string }>;
};

export async function generateMetadata({ searchParams }: ResumePageProps): Promise<Metadata> {
  const { focus: focusParam } = await searchParams;
  const focus = parseResumeFocus(focusParam);
  const config = getResumeFocusConfig(focus);

  return {
    title: `${portfolioData.name}${config.titleSuffix} | Resume`,
    description: config.headline.slice(0, 160)
  };
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const { focus: focusParam } = await searchParams;
  const focus = parseResumeFocus(focusParam);

  return <ResumeView focus={focus} />;
}
