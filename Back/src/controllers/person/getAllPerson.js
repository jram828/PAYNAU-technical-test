
import {models} from '../../../DB.js';

const { Person} = models

const getAllPerson = async()=>{
         const allPerson=await Person.findAll( {where: {
            activo: true,
          }});
         return (allPerson)
 }

export {
    getAllPerson
}
