let convictions = []

export const useConvictions = () => crimes.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(crimesData => {
            convictions = crimesData
    })
}