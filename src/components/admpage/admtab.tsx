import { Edit, Eye, Trash } from "lucide-react";
import TabBoDy from "./tbody";
export function AdmtaB() {
  return (
    <div className="flex items-center justify-center overflow-x-auto">
    <table className=" w-1/3 h-auto  border-collapse ">
      <thead className="bg-black text-white">
        <tr>
          <th className="px-2 py-1 text-sm">Nome:</th>
          <th className="px-2 py-1 text-sm">Preço:</th>
          <th className="px-2 py-1 text-sm">Descrição:</th>
          <th className="px-2 py-1 text-sm"></th>
        </tr>
      
    

  
     
      </thead>
      <tbody>
     <TabBoDy />
     <TabBoDy />
     <TabBoDy />
     <TabBoDy />
      </tbody>
    </table>
   </div>
  );
}
