import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

export const STATUS_LABEL: Record<Project["data"]["status"], string> = {
  live: "Live",
  shipped: "Shipped",
  "in-progress": "In progress",
};

const getSortedProjects = (projects: Project[]) =>
  [...projects].sort(
    (a, b) =>
      a.data.order - b.data.order ||
      (b.data.year ?? 0) - (a.data.year ?? 0) ||
      a.data.title.localeCompare(b.data.title)
  );

export default getSortedProjects;
