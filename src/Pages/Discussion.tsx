const Discussion = () => {
  const question = {
    title: "How to implement dark mode in React with Tailwind?",
    description:
      "I'm building a forum and want to support both light and dark mode using TailwindCSS. Should I use class strategy or CSS variables? Also, how can I store theme preference across reloads?",
    upvotes: 128,
    likes: 36,
    replies: [{}, {}, {}], // simulate 3 replies
    images: [
      "https://images.unsplash.com/photo-1604079628040-94339a16c684",
      "https://images.unsplash.com/photo-1581276879432-c38c86f0d981",
    ],
  };

  const user = {
    name: "Veer",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Veer",
  };
  const formattedDate = "2 hours ago";

  return (
    <div className="p-6 bg-gradient-to-br from-[#5C0029] to-[#61304b] h-lvh">
      <div className="backdrop-blur-md  bg-white/10 border border-white/20 text-white rounded-3xl p-6 shadow-xl ">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white dark:text-white">
              {question.title}
            </h1>
            <p className="text-sm text-white dark:text-gray-400 mt-1">
              Asked by <span className="font-medium">{user.name}</span> •{" "}
              {formattedDate}
            </p>
          </div>
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
        <p className="mt-4 text-white dark:text-gray-300 text-lg leading-relaxed">
          {question.description}
        </p>
        {question.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {question.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl object-cover max-h-64 border border-gray-200 dark:border-gray-700"
              />
            ))}
          </div>
        )}
        <div className="flex mt-6 gap-4 text-sm">
          <button className="hover:text-green-600 transition">
            👍 {question.upvotes}
          </button>
          <button className="hover:text-pink-500 transition">
            ❤️ {question.likes}
          </button>
          <button className="hover:text-blue-500 transition">
            💬 {question.replies.length} Replies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
