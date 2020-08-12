import { getOfficers, useOfficer } from "./OfficerDataProvider.js" ;
import { OfficerHTML } from "./OfficerHTML.js";
// import { useConvictions } from "../convictions/ConvictionProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('officerSelected', event => {
    // You remembered to add the id of the crime to the event detail, right?
     // Which crime was chosen?????
     const officerThatWasSelected = event.detail.crimeId  // 9

     // Get actual crime name. Number is not enough.
     const arrayOfOfficers = useOfficer()
     const foundOfficerObject = arrayOfOfficers.find(officer => {
             return parseInt(officerThatWasSelected) === officer.id   // NaN  "falsy"
         }
     ) // { id: 9, name: "Theft" }

    //  LEFT OFF HERE ################@$@#$#@$@#$@#$@#$@#$#$#@$@#$#@$#@$#@$#@$#@$@!$#!@$!@$!@#$@!$!@#$!@#$#@!$#!@$#!@$!@##$!@#$!@#$#@!$#!@$!@#$@!#$@!#$@!#$
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
