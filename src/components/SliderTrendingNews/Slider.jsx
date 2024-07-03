
export default function Slider() {
  return (
    <div className="relative w-1/3">
    <img src="https://placehold.co/600x400" alt="San Francisco streetcar" className="w-full h-full object-cover"/>
    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
      <div className="flex items-center mb-2">
        <img src="https://placehold.co/40x40" alt="Author avatar" className="w-10 h-10 rounded-full mr-2"/>
        <span className="text-sm">BY JESSIE BOND</span>
      </div>
      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">Business</span>
      <h3 className="text-xl font-bold mt-2">Envatocoin Vulnerable To Retest 20K Support</h3>
      <div className="flex items-center text-sm mt-2 space-x-2">
        <span>📅 June 13, 2022</span>
        <span>💬 3</span>
        <span>👁️ 405 VIEWS</span>
      </div>
    </div>
  </div>
  )
}
