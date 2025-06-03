interface Reply {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

interface Question {
  id: string;
  user: string;
  title: string;
  content: string;
  category: string[]; // e.g., "React", "CSS", etc.
  views: number; // number of times it's been viewed
  replies: Reply[]; // list of replies
  timestamp: string; // when it was asked
  answered: boolean;
}

export const dummyQuestions: Question[] = [
  {
    id: "q1",
    user: "veer",
    title: "How does useState work under the hood?",
    content: "Trying to understand React internals a bit better.",
    category: ["React", "Python", "CSS"],
    views: 102,
    timestamp: "2025-06-03T10:00:00Z",
    replies: [
      {
        id: "r1",
        user: "bawe",
        content: "Check out React's source code on GitHub and look into Fiber.",
        timestamp: "2025-06-03T10:15:00Z",
      },
    ],
    answered: true,
  },
  {
    id: "q2",
    user: "alex",
    title: "What are Tailwind utility classes?",
    content: "Trying to understand how Tailwind replaces traditional CSS.",
    category: ["CSS", "Node.Js"],
    views: 64,
    timestamp: "2025-06-02T09:20:00Z",
    replies: [],
    answered: false,
  },
  {
    id: "q3",
    user: "jane",
    title: "Difference between useEffect and useLayoutEffect?",
    content: "When should I use one over the other?",
    category: ["React", "CSS"],
    views: 189,
    timestamp: "2025-06-01T17:30:00Z",
    replies: [
      {
        id: "r2",
        user: "dev123",
        content:
          "useLayoutEffect runs before paint. Useful for DOM measurements.",
        timestamp: "2025-06-01T18:00:00Z",
      },
      {
        id: "r3",
        user: "veer",
        content:
          "Split components, use React.lazy, and cache API calls smartly.",
        timestamp: "2025-06-03T08:25:00Z",
      },
    ],
    answered: true,
  },
  {
    id: "q4",
    user: "mira",
    title: "Best way to handle form validation in React?",
    content:
      "I'm confused between using Formik, React Hook Form, or building custom.",
    category: ["Forms", "React"],
    views: 75,
    timestamp: "2025-05-30T14:45:00Z",
    replies: [],
    answered: false,
  },
  {
    id: "q5",
    user: "ravi",
    title: "How to improve web performance in large apps?",
    content:
      "Page load is slow. I want tips on lazy loading, memoization, etc.",
    category: ["Performance", "Forms"],
    views: 142,
    timestamp: "2025-06-03T08:10:00Z",
    replies: [
      {
        id: "r4",
        user: "Orewa",
        content:
          "Split components, use React.lazy, and cache API calls smartly. and something else",
        timestamp: "2025-06-03T08:25:00Z",
      },
    ],
    answered: true,
  },
];
