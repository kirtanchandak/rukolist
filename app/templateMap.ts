// app/templateMap.ts

const templateMap: Record<number, () => Promise<any>> = {
  1: () => import("@/components/templates/Template1"),
  2: () => import("@/components/templates/Template2"),
};

export default templateMap;
