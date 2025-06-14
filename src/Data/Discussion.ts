// User
interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bookmark: string[];
  bio: string;
  email: string;
  location: string;
  joinedAt: string;
  website: string | null;
  skills: string[];
  bookmarks: string[];
  posts: string[];
}

// Reply (recursive)
interface Reply {
  id: string;
  questionId: string;
  parentId: string | null;
  user: User;
  body: string;
  createdAt: string;
  upvotes: number;
  isSolution?: boolean;
}

// Question
export interface Question {
  id: string;
  title: string;
  body: string;
  tags: string[];
  createdAt: string;
  user: User;
  upvotes: number;
  views: number;
  isSolved: boolean;
  replies: Reply[];
}
export const users: User[] = [
  {
    id: "u1",
    name: "Veer Sharma",
    username: "veerdev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jay",
    bio: "Learning React, loving forums. Building side projects to stay sane.",
    email: "veer@forumapp.dev",
    location: "Dehradun, India",
    joinedAt: "2023-04-12",
    website: "https://veer.dev",
    skills: ["React", "Tailwind", "Node.js"],
    bookmarks: ["q101", "q112", "q135"],
    posts: ["q123", "q124", "q125"],
    bookmark: ["q123", "q124"],
  },
  {
    id: "u2",
    name: "Ananya Raj",
    username: "ananyarc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yoda",
    bio: "Frontend engineer. Minimalist. Dark theme advocate.",
    email: "ananya@forumapp.dev",
    location: "Pune, India",
    joinedAt: "2022-11-03",
    website: "https://ananya.design",
    skills: ["Vue", "Figma", "HTML"],
    bookmarks: ["q102", "q115"],
    posts: ["p6", "p9", "p14"],
    bookmark: ["q123"],
  },
  {
    id: "u3",
    name: "Ishaan Malik",
    username: "ishaan.codes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brahma",
    bio: "Typescript addict | React + Rust explorer | chai > coffee",
    email: "ishaan@forumapp.dev",
    location: "Delhi, India",
    joinedAt: "2024-01-18",
    website: "https://ishaan.codes",
    skills: ["TypeScript", "Rust", "Next.js"],
    bookmarks: ["q140", "q128", "q105"],
    posts: ["p22", "p33"],
    bookmark: ["q124"],
  },
  {
    id: "u4",
    name: "Riya Kapoor",
    username: "riya.ui",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grumpy",
    bio: "UI designer turned frontend dev. Trying to keep my CSS clean.",
    email: "riya@forumapp.dev",
    location: "Bangalore, India",
    joinedAt: "2023-07-21",
    website: null,
    skills: ["CSS", "Framer Motion", "Svelte"],
    bookmarks: [],
    posts: ["p11"],
    bookmark: ["q124"],
  },
  {
    id: "u5",
    name: "Zaid Khan",
    username: "zk404",
    avatar: "/avatars/zaid.jpeg",
    bio: "Debugging life one commit at a time. Node, Express, and chaos.",
    email: "zaid@forumapp.dev",
    location: "Hyderabad, India",
    joinedAt: "2022-09-01",
    website: "https://zk404.dev",
    skills: ["Node.js", "MongoDB", "Redis"],
    bookmarks: ["q109", "q113"],
    posts: ["p3", "p8", "p44", "p67"],
    bookmark: ["q124"],
  },
  {
    id: "u6",
    name: "Tanya Mehta",
    username: "tanyadev",
    avatar: "/avatars/tanya.png",
    bio: "Building fullstack apps. Currently obsessed with Tailwind + Supabase.",
    email: "tanya@forumapp.dev",
    location: "Mumbai, India",
    joinedAt: "2023-12-05",
    website: "https://tanyamehta.dev",
    skills: ["Tailwind", "Supabase", "Prisma", "React"],
    bookmarks: [],
    posts: ["p20", "p29"],
    bookmark: ["q124"],
  },
  {
    id: "u7",
    name: "Raghav Sinha",
    username: "rghv",
    avatar: "/avatars/raghav.jpg",
    bio: "Love reading source code. Contributing to OSS. Weekend hiker.",
    email: "raghav@forumapp.dev",
    location: "Chandigarh, India",
    joinedAt: "2021-08-09",
    website: "https://github.com/rghv",
    skills: ["C++", "Open Source", "Linux"],
    bookmarks: ["q111", "q142"],
    posts: ["p90"],
    bookmark: ["q124"],
  },
  {
    id: "u8",
    name: "Niharika Das",
    username: "niharika.dev",
    avatar: "/avatars/niharika.jpeg",
    bio: "Self-taught dev. Into Astro, Deno, and clean design systems.",
    email: "niharika@forumapp.dev",
    location: "Kolkata, India",
    joinedAt: "2024-02-20",
    website: null,
    skills: ["Astro", "Deno", "Tailwind", "Design Systems"],
    bookmarks: [],
    posts: [],
    bookmark: ["q124"],
  },
];

const discussion2: Question = {
  id: "q124",
  title: "What's the difference between `null` and `undefined` in JavaScript?",
  body: "I've always been confused when to use `null` vs `undefined`. They seem similar, but are they really different in behavior or purpose?",
  tags: ["javascript", "null", "undefined", "types"],
  createdAt: "2025-06-08T13:40:00Z",
  user: users[2],
  upvotes: 41,
  views: 301,
  isSolved: true,
  replies: [
    {
      id: "r201",
      questionId: "q124",
      parentId: null,
      body: "`undefined` usually means a variable hasn’t been assigned yet, while `null` is an intentional absence of value.",
      createdAt: "2025-06-08T14:01:00Z",
      user: users[1],
      upvotes: 47,
      isSolution: true,
    },
    {
      id: "r202",
      questionId: "q124",
      parentId: null,
      body: "typeof null is 'object', which is a well-known JavaScript bug — just be aware of it.",
      createdAt: "2025-06-08T14:10:00Z",
      user: users[0],
      upvotes: 25,
    },
    {
      id: "r203",
      questionId: "q124",
      parentId: "r202",
      body: "Yeah lol, been there. Still confuses people learning JS.",
      createdAt: "2025-06-08T14:13:00Z",
      user: users[3],
      upvotes: 12,
    },
  ],
};
const discussion3: Question = {
  id: "q125",
  title: "What’s the best folder structure for a large React app?",
  body: "I’ve seen people use feature-based, domain-based, and even atomic design approaches. What’s the best folder structure you’ve used for a large-scale production React app?",
  tags: ["react", "architecture", "best-practices", "folder-structure"],
  createdAt: "2025-06-07T10:18:00Z",
  user: users[3],
  upvotes: 55,
  views: 387,
  isSolved: false,
  replies: [
    {
      id: "r301",
      questionId: "q125",
      parentId: null,
      body: "We use a domain-driven structure: `/features`, `/shared`, `/entities`, etc. Works well for large codebases.",
      createdAt: "2025-06-07T10:40:00Z",
      user: users[1],
      upvotes: 61,
    },
    {
      id: "r302",
      questionId: "q125",
      parentId: null,
      body: "Honestly, no structure survives long without discipline. Just make sure you separate concerns well and avoid overengineering.",
      createdAt: "2025-06-07T10:55:00Z",
      user: users[0],
      upvotes: 39,
    },
    {
      id: "r303",
      questionId: "q125",
      parentId: "r301",
      body: "Can you share a GitHub example or gist for your domain-driven structure?",
      createdAt: "2025-06-07T11:02:00Z",
      user: users[2],
      upvotes: 18,
    },
  ],
};
const discussion4: Question = {
  id: "q126",
  title: "How to make async/await retry on failure in TypeScript?",
  body: "I have an API call that sometimes fails. I want to retry it up to 3 times with a delay. How can I do that using async/await cleanly in TS?",
  tags: ["typescript", "async-await", "retry", "promise"],
  createdAt: "2025-06-06T09:50:00Z",
  user: users[1],
  upvotes: 67,
  views: 462,
  isSolved: true,
  replies: [
    {
      id: "r401",
      questionId: "q126",
      parentId: null,
      body: "You can write a simple retry wrapper:\n```ts\nasync function retry(fn, retries = 3) {\n  while (retries--) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (retries === 0) throw err;\n      await new Promise(r => setTimeout(r, 1000));\n    }\n  }\n}\n```",
      createdAt: "2025-06-06T10:10:00Z",
      user: users[2],
      upvotes: 78,
      isSolution: true,
    },
    {
      id: "r402",
      questionId: "q126",
      parentId: null,
      body: "Some libraries like `axios-retry` or `p-retry` do this too if you want to avoid writing your own logic.",
      createdAt: "2025-06-06T10:18:00Z",
      user: users[0],
      upvotes: 34,
    },
  ],
};

const discussion1: Question = {
  id: "q123",
  title: "Why is my useEffect running twice in React 18 Strict Mode?",
  body: "I'm seeing `useEffect` being called twice on mount in development, but not in production. What's going on? Is it a bug or expected behavior?",
  tags: ["react", "useEffect", "react18", "strict-mode"],
  createdAt: "2025-06-09T15:23:00Z",
  user: users[0],
  upvotes: 27,
  views: 182,
  isSolved: true,
  replies: [
    {
      id: "r101",
      questionId: "q123",
      parentId: null,
      body: "This is expected in React 18 when using Strict Mode. React intentionally double-invokes certain lifecycle methods like `useEffect` to help you identify side-effect bugs. It only happens in dev mode though.",
      createdAt: "2025-06-09T16:05:00Z",
      user: users[1],
      upvotes: 53,
      isSolution: true,
    },
    {
      id: "r101_1",
      questionId: "q123",
      parentId: "r101",
      body: "So just to confirm — it won’t happen in production right?",
      createdAt: "2025-06-09T16:15:00Z",
      user: users[0],
      upvotes: 6,
    },
    {
      id: "r101_1_1",
      questionId: "q123",
      parentId: "r101_1",
      body: "Correct. In production builds, effects only run once unless you change their dependencies.",
      createdAt: "2025-06-09T16:17:00Z",
      user: users[1],
      upvotes: 11,
    },
    {
      id: "r102",
      questionId: "q123",
      parentId: null,
      body: "If you don’t want the double effect during development, you can remove `<React.StrictMode>` but I’d advise against it. Better to write idempotent effects.",
      createdAt: "2025-06-09T16:11:00Z",
      user: users[2],
      upvotes: 33,
    },
    {
      id: "r103",
      questionId: "q123",
      parentId: null,
      body: "React could’ve just made this behavior optional tbh. Sometimes it’s more confusing than helpful.",
      createdAt: "2025-06-09T16:20:00Z",
      user: users[3],
      upvotes: 12,
    },
    {
      id: "r103_1",
      questionId: "q123",
      parentId: "r103",
      body: "It *is* optional technically — Strict Mode is opt-in. But yeah I get your point.",
      createdAt: "2025-06-09T16:25:00Z",
      user: users[2],
      upvotes: 7,
    },
  ],
};
export const discussion: Question[] = [
  discussion1,
  discussion2,
  discussion3,
  discussion4,
];
