import { DateTime } from 'luxon';
import { People } from './models/people';

console.log('');
const people = new People();
console.log(people);
console.log('');

const data = new Date();
console.log(data.toISOString());
console.log(DateTime.fromJSDate(data).toISO()?.toString());
console.log(DateTime.fromJSDate(data)?.toString());
CreateTet('er');
function CreateTet(nome: String): String{
    while (true){

    }
    return nome + 'Test';
}