import { createServerFn } from "@tanstack/react-start";
import { getYouTubeData } from "./youtube.server";

export type { YouTubeData, YouTubeVideo } from "./youtube.server";

export const getYouTube = createServerFn({ method: "GET" }).handler(() =>
  getYouTubeData(),
);
