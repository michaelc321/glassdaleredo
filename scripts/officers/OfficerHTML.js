export const OfficerHTML = (officerObj) => {
    return `
        <section class="criminal">
            <h4>${officerObj.name}</h4>
            <div class="criminal__age">Age: ${ officerObj.age }</div>
            <div class="criminal__crime">Crime: ${ officerObj.conviction }</div>
            <div class="criminal__term-start">Term start: ${ new Date(officerObj.incarceration.start).toLocaleDateString('en-US') }</div>
            <div class="criminal__term-end">Term end: ${ new Date(officerObj.incarceration.end).toLocaleDateString('en-US') }</div>
        </section>
    `
}