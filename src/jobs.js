let jobs=[
    {
        id:1,
        company:"TELEPERFOMANCE COLOMBIA",
        workPosition:"Agente de BackOffice",
        year:"Diciembre 2018 – Junio 2020"
    },
    {
        id:2,
        company:" COLOMBIA",
        workPosition:"Agente",
        year:"Diciembre 2020"
    }
]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((job)=>job.id===id);
}


