export const TAGS = ["All", "Answered", "Unanswered"] as const;
export type TagType = (typeof TAGS)[number]; // "All" | "Answered" | "Unanswered"
