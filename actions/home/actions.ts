"use server"

import prisma from "@/lib/db";

export default async function getPrincipaisprodutos(){
    const products = await prisma.product.findMany({
    
        select:{
      id:true,
      title:true,
      description:true,
      price:true,
      image:true

        },
       take:3
    })
  return  products; 
}