import { useState } from 'react'

function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      {showMore && <p className="mb-4 text-black/80">{body}</p>}
      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="cursor-pointer text-sm text-[#b83f45] hover:underline"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}
 
export default NoteCard