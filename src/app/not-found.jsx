import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-red-500" href="/">Return Home</Link>
    </div>
  )
}