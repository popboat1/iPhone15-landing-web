import { Html } from "@react-three/drei"
const Loading = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vw] rounded-full">
                Loading...
            </div>
        </div>
    </Html>
  )
}

export default Loading