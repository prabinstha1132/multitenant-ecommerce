import { Input } from "@/components/ui/input"
import {Button} from "../components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"



export default function Home() {
 return (
  <div className="p-4">
  <div className ="flex flex-col gap-y-4">
    <div>
  <Button variant="elevated" className="text-blue-300">
Home
  </Button>
  </div>
  <div>
    <Input placeholder="name"
    name="title"/>
  </div>
  <div>
    <Progress value={50}/>
  </div>
  <div>
    <Textarea placeholder="write feedback"/>
  </div>
  </div>
  </div>
 )
}
