export default function Message({ author, text, self }) {
  return (
    <div className={`flex mb-3 ${self ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-lg px-4 py-2 rounded-lg text-sm leading-relaxed
          ${self
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-700 text-gray-100 rounded-bl-sm'
          }`}
      >
        <div className="text-xs opacity-70 mb-1">
          {author}
        </div>
        {text}
      </div>
    </div>
  )
}