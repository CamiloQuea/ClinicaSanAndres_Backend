import { Types } from "mongoose";
import { Department } from "./DepartmentSchema";

const defaultServices = [
  {
    _id: new Types.ObjectId(),
    name: "consulta",
    price: 100
  },
  {
    _id: new Types.ObjectId(),
    name: "emergencia",
    price: 200
  },
];

export const DepartmentExample: (Department&{
    m:number
})[] = [
  {
    _id: new Types.ObjectId(),
    name: "Medicina General",
    services: defaultServices,
    m: 0.7
    
  },
  {
    _id: new Types.ObjectId(),
    name: "Pediatría",
    services: defaultServices,
    m: 0.5
  },
  {
    _id: new Types.ObjectId(),
    name: "Oftalmología",
    services: defaultServices,
    m:0.6
  },
  {
    _id: new Types.ObjectId(),
    name: "Gineco-Obstetricia",
    services: defaultServices,
    m:0.6
  },

  //

  {
    _id: new Types.ObjectId(),
    name: "Reumatología",
    services: defaultServices,
    m:0.8
  },
  {
    _id: new Types.ObjectId(),
    name: "Endocrinología",
    services: defaultServices,
    m:0.7
  },
  {
    _id: new Types.ObjectId(),
    name: "Dermatología",
    services: defaultServices,
    m:0.5
  },
  {
    _id: new Types.ObjectId(),
    name: "Otorrinolaringología",
    services: defaultServices,
    m:0.6
  },

  //

  {
    _id: new Types.ObjectId(),
    name: "Traumatología",
    services: defaultServices,
    m:0.5
  },
  {
    _id: new Types.ObjectId(),
    name: "Cardiología",
    services: defaultServices,
    m:0.6
  },
  {
    _id: new Types.ObjectId(),
    name: "Psicología",
    services: defaultServices,
    m:0.6
  },
  {
    _id: new Types.ObjectId(),
    name: "Cirugía",
    services: defaultServices,
    m:0.8
  },


  {
    _id: new Types.ObjectId(),
    name: "Urología",
    services: defaultServices,
    m:0.65
  },

  {
    _id: new Types.ObjectId(),
    name: "Gastroenterología",
    services: defaultServices,
    m:0.55
  },

];
