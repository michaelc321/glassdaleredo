/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    /*
    Use interpolation here to invoke the map() method on
    the convictionsCollection to generate the option elements.
    Look back at the example provided above.
    */
   contentTarget.innerHTML = `
   <select class="dropdown" id="crimeSelect">
   <option value="0">Please select a crime...</option>
   ${
       criminals.map(criminalObj => {
           return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
        })
    }
    </select>
    `
}


export const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()
    render(convictions)
}