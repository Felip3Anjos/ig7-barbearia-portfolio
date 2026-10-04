export const services = [
  ["Cabelo",45,"30 min"],
  ["Barba",40,"30 min"],
  ["Sobrancelha",10,"Adicional"],
  ["Alisamento",60,"30 min"],
  ["Cabelo + Barba",85,"60 min"],
  ["Cabelo + Sobrancelha",55,"30 min"],
  ["Cabelo + Sobrancelha + Barba",95,"60 min"],
] as const;

export const appointments = [
  {time:"08:00",client:"João Silva",barber:"Igor",service:"Cabelo",status:"Pago"},
  {time:"09:30",client:"Lucas Santos",barber:"Marcus",service:"Cabelo + Barba",status:"Confirmado"},
  {time:"11:00",client:"Pedro Martins",barber:"Eduardo",service:"Barba",status:"Confirmado"},
  {time:"14:30",client:"Gabriel Souza",barber:"Igor",service:"Cabelo + Sobrancelha",status:"Confirmado"},
];

export const money = (v:number) =>
  new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v);
