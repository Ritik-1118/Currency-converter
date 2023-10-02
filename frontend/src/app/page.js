import Converter from "./components/Converter";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-blue-500 text-6xl mt-10 mb-5">Home</h1><hr/>
      <div className=" my-10">
      <Converter/>
      </div>
    </div>
  )
}
