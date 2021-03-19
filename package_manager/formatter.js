import { format } from "date-fns";

console.log("Olá, mundo!")

function formatDate(data) {
    console.log(format(data, 'dd.MM.yyyy'))
}
//const data = new Date()


export { formatDate };






