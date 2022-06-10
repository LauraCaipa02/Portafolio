let studies=[
{
    id:1,
    level:"UNIVERSITARIA",
    institution:"UNIVERIDAD ECCI",
    degree:"IngenierIa Industrial",
    year:"2020-Actualidad"
},
{
    id:2,
    level:"SECUNDARIA",
    institution:"COLEGIO REMBRANDT",
    degree:"Bachiller Académico Con Énfasis en Comerciales y Emprendimiento",
    year:"2016"
},
{
    id:3,
    level:"PRIMARIA",
    institution:"COLEGIO REMBRANDT",
    degree:"Educación basica primaria",
    year:"2010",
}
]

export function getAllStudies(){
        return studies;
}

export function getStudy(id){
    return studies.find((study)=>study.id===id);
}