import { Edit, Eye, Trash } from "lucide-react";

export default function TabBoDy(){
return(

<tr className="bg-white text-black">
  <td className="px-2 py-1 text-xs border border-black lg:px-4 lg:py-2">Nome:</td>
  <td className="px-2 py-1 text-xs border border-black lg:px-4 lg:py-2">Nome:</td>
  <td className="px-2 py-1 text-xs border border-black break-words  lg:px-4 lg:py-2">
    hdsbhb dhsbhdbsj hvbdhbcjhsd
  </td>
  <td className="px-2 py-1 text-xs border border-black">
    <div className="flex flex-col gap-2 md:flex-row">
      <button className=" rounded-full bg-black text-white hover:bg-gray-700 p-2">
        <Eye />
      </button>
      <button className=" rounded-full bg-black text-white hover:bg-gray-700 p-2">
        <Edit />
      </button>
      <button className=" rounded-full bg-black text-white hover:bg-gray-700 p-2">
        <Trash />
      </button>
    </div>
  </td>
</tr>




)


}
