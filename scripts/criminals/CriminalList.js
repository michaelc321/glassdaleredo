import { getCriminals, useCriminals } from "./CriminalDataProvider.js" ;
import { CriminalHTML } from "./CriminalHTML.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', (crimeChosenEvent) => {
    // You remembered to add the id of the crime to the event detail, right?
    const crimeThatWasSeleted = crimeSelectedEvent.detail.crimeId

    const arrayOfCriminals = useConvictions()
    const foundCrimeObject = arrayOfCrimes.find(
        (crime) => {
            return parseInt(crimeThatWasSeleted) === crime.id
        }
    )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
})


const render = (arrayOfCriminals) => {

    let criminalHTMLRepresentation = ""

    arrayOfCriminals.forEach(criminal => {
        criminalHTMLRepresentation += CriminalHTML(criminal)
    })

    contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="crimintalList">
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


