import { useState, useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function NoteCard({ title, body }) {
  const [showMore, setShowMore] = useState(false)
  const { largeText } = useContext(SettingsContext)

  return (
    <div>
      <h3
        className={
          largeText
            ? 'pr-8 text-[28px] font-normal break-words'
            : 'pr-8 text-[22px] font-normal break-words'
        }
      >
        {title}
      </h3>
      {showMore && (
        <p
          className={
            largeText
              ? 'mt-3 text-[21px] break-words whitespace-pre-wrap text-[#4d4d4d]'
              : 'mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]'
          }
        >
          {body}
        </p>
      )}
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