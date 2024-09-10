import prisma from "@/lib/db";
import { title } from "process";
import { getEnabledCategories } from "trace_events";
const itmesPerPage = 4;

export async function fetchFilterProducts(query: string, currentPage: number) {
  const products = await prisma.product.findMany({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
    orderBy: {
      title: "asc",
    },
    take: itmesPerPage,
  });
  const count = await prisma.product.count({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
  });
  return { products, count };
}
