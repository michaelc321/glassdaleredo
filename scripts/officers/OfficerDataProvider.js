let officers = []

export const useOfficer = () => officers.slice()

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")    
        .then(response => response.json())
        .then(officerData => {
            officers = officerData
        })
}