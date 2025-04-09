class Building {
    /* Constructor */
    constructor(attributes) {
        this.name = attributes.name
        // this.coverPhoto = attributes.coverPhoto
        this.abbreviation = attributes.abbreviation
        this.description = attributes.description
        this.address = attributes.address
        this.yearBuilt = attributes.yearBuilt
        this.area = attributes.area
        this.campus = attributes.campus
        // this.mediaFolder = "public/" + this.name + " media"
        this.errors = []
    }

    /* Validation Function */
    isValid() {
        this.errors = []

        if (!this.name) {
            this.errors.push("The building must have a name.")
        } else if (this.name.length > 100) {
            this.errors.push("The building\'s name must be 100 characters or less.")
        }

        /*  TODO
        if (!this.coverPhoto) {
            this.errors.push("The building must have a cover photo.")
        } else if (this.coverPhoto not in POST request?) {
            this.errors.push("There were problems getting the building\'s cover photo.")
        }
        */

        if (!this.abbreviation) {
            this.errors.push("The building must have an abbreviation.")
        } else if (this.abbreviation.length > 5) {
            this.errors.push("The building\'s abbreviation must be 5 characters or less.")
        } else if (this.abbreviation.length < 2) {
            this.errors.push("The building\'s abbreviation must be 2 characters or more.")
        }

        if (!this.description) {
            this.errors.push("The building must have a description.")
        } else if (this.description.length > 1000) {
            this.errors.push("The building\'s description must be 1000 characters or less.")
        }

        if (!this.address) {
            this.errors.push("The building must have an address.")
        } else if (this.address.length > 100) {
            this.errors.push("The building\'s address must be 100 characters or less.")
        }

        if (!this.yearBuilt) {
            this.errors.push("The building must have a year built.")
        } else if (this.yearBuilt < 1960) {
            this.errors.push("The building\'s year built must be 1960 or after.")
        } else if (this.yearBuilt > new Date().getFullYear()) {
            this.errors.push("The building\'s year built must be the current year or earlier.")
        }

        if (!this.area) {
            this.errors.push("The building must have a square footage.")
        } else if (this.area <= 0) {
            this.errors.push("The building\'s square footage must be over 0 square feet.")
        }

        if (!this.campus) {
            this.errors.push("The building must have a campus.")
        } else if (!(this.campus == "Allendale" || this.campus == "Pew" || this.campus == "Health")) {
            this.errors.push("The building\'s campus must be Allendale, Pew, or Health campus.")
        }

        /*  TODO
            Need some kind of error handling for submission of media (pictures, ???)
            Constructor creates folder, should additions to folder be handled here? Probably not
        */

        return this.errors.length <= 0
    }
}

module.exports = Building
