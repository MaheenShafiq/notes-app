

export default function SearchNote({setText}: {  setText: React.Dispatch<React.SetStateAction<string>>}) {
  return (
      <input type="text" className="search"  placeholder='search' onChange={(e) => setText(e.target.value)} />
  )
}
