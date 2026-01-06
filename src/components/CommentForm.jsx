import { useState } from "react";

export default function CommentForm({ post, addComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSubmitting(true);

    setTimeout(() => {
      addComment(post.id, {
        id: Date.now(),
        name,
        text,
      });

      setName("");
      setText("");
      setSubmitting(false);
    }, 800); // simulate network delay
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mt-12 flex flex-col gap-6 max-w-3xl mx-auto"
    >
      <h4 className="text-xl font-semibold mb-4">Leave a Comment</h4>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
            className="peer w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-indigo-400 peer-focus:text-sm"
          >
            Your Name
          </label>
        </div>

        <div className="relative flex-1">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-indigo-400 peer-focus:text-sm"
          >
            Email (optional)
          </label>
        </div>
      </div>

      <div className="relative">
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=" "
          rows={4}
          className="peer w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
        />
        <label
          htmlFor="comment"
          className="absolute left-4 top-2 text-zinc-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-indigo-400 peer-focus:text-sm"
        >
          Your Comment
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="self-end px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition flex items-center gap-2"
      >
        {submitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
