import { getCriminals, useCriminals } from "./CriminalDataProvider.js" ;
import { CriminalHTML } from "./CriminalHTML.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeSelected', event => {
    // You remembered to add the id of the crime to the event detail, right?
     // Which crime was chosen?????
     const crimeThatWasSelected = event.detail.crimeId  // 9

     // Get actual crime name. Number is not enough.
     const arrayOfCrimes = useConvictions()
     const foundCrimeObject = arrayOfCrimes.find(crime => {
             return parseInt(crimeThatWasSelected) === crime.id   // NaN  "falsy"
         }
     ) // { id: 9, name: "Theft" }
 
     // Filter criminal array to only criminal that have a matching `conviction` property value
     const allCriminals = useCriminals()
 
     const filteredCriminals = allCriminals.filter(currentCriminalObject => {
             return foundCrimeObject.name === currentCriminalObject.conviction
         }
     ) // [ {}, {}, {}]
 
     render(filteredCriminals)
 })


const render = (arrayOfCriminals) => {

    let criminalHTMLRepresentation = ""

    arrayOfCriminals.forEach(criminal => {
        criminalHTMLRepresentation += CriminalHTML(criminal)
    })

    contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="criminalList">
            ${criminalHTMLRepresentation}
        </article>
    `


}





export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}


