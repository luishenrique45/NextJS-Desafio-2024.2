import FooTer from "@/components/footer/fooTer"
import NavBar from "@/components/nave"
import { Children } from "react"
import ConTaTo from "@/components/pag-contato/PagC"
export default function home(){
return(
<body>
<NavBar/>
< div className="flex items-center h-screen justify-center bg-blue-500">
    
    
 <ConTaTo />

 


</div>
<FooTer />
</body>

)



}