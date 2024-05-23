import { Company } from "src/app/core/interfaces/company";
import { Item } from "src/app/core/interfaces/item";

export const CompaniesMock: Company[] = [
  {
    id: 100,
    nit: "01020304050607",
    name: "NEYI, RETASOS DEL EJE CAFETERO",
    description: "Emprendimiento local hechos con recursos propios y mucho trabajo",
    route: "/retazos",
    menuName:"Retasos"
  },
  {
    id: 101,
    nit: "01020304050607",
    name: "PET SHOPS",
    description: "Emprendimiento local hechos con recursos propios y mucho trabajo",
    route: "/tienda-para-perros",
    menuName:"Perros"
  },

]