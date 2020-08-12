/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useOfficer, getOfficers } from "./OfficerDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

// Capture that the user generated a change event by the browser
contentTarget.addEventListener("change", changeEvent => {

    // Construct the event based on agreement with Steve
    const customEvent = new CustomEvent("officerSelected", {
        detail: {
            officerId: changeEvent.target.value
        }
    })

    eventHub.dispatchEvent(customEvent)
})

const render = officerCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select an Officer...</option>
            ${
                officerCollection.map(officerObject => {
                        return `<option value="${ officerObject.id }">${officerObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        // Get all convictions from application state
        const officers = useOfficer()

        render(officers)
    })
}