const Building = require("../models/Building")

describe("Building", () => {
    describe(".constructor", () => {
        it("should set all Building properties", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.name).toBe("Niemeyer")
            expect(testBuilding.abbreviation).toBe("NHC")
            expect(testBuilding.description).toBe("Test description!")
            expect(testBuilding.address).toBe("4045 Calder Dr.")
            expect(testBuilding.yearBuilt).toBe(2008)
            expect(testBuilding.area).toBe(180000)
            expect(testBuilding.campus).toBe("Allendale")
        })

        it("should create an empty error list", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.errors.length).toBe(0)
        })
    })

    describe("#isValid", () => {
        /* Test Name Validation */
        it("passes a valid name", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent name", () => {
            let testBuilding = new Building({ abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects a name too long", () => {
            let testBuilding = new Building({ name: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Abbreviation Validation */
        it("passes a valid abbreviation", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent abbreviation", () => {
            let testBuilding = new Building({ name: "Niemeyer", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects an abbreviation too long", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "123456", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects an abbreviation too short", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "N", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Description Validation */
        it("passes a valid description", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent description", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects a description too long", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "&4h#RUxjb8vZL@A9qK7!oYdNlTgJswF0zHe1BM6Cfn3WpiEXV2rQcGkm5+tySDaP$uObn^IZvY4LMF@Cqx#eWTGzj7A!PUKBRm98NsopJ1l^w3dX$&hEfa2iV6rOc+bCyMkgtHzLn#Qe4RJYP07XS!dWg3kmopbZv@+Fi9UtCLT$#EN8M2Anl5qKhwryexVODGz!J^PIFNcXsTBO9AUWbRM7641g+eKdQym@Ztp3#voLiaYXn2sfH!E5CWG^xjFr9L#0MkTRqwdJ7PbOyUNeX$6ctLgAKhz!vfQmsZ@BVo8n3WD1Cyik7PEJr24#FqxaMG5XUbYOLNC9t$Td^shKpiXgWAV+owQbz!REmlFJc3#71nyDO0Mk2PrVA9$TqegUHCLfXizpKaYWNBds6xJOv^8M+btr!cGE4UXWqRY9PMgoNkvLFdAjpZHnsCT7#$1b2E3WAxNiKVuPl+TYm^OBX6rfJ!czGHwDo7Qt0pZSMaeKNbL59ydxCFgvRUJX@t!r4oPz2yL#M^FEbWT6kcUAVGiNOq0hlXsnpCmBJ+R893DdYwtmA5vg&4h#RUxjb8vZL@A9qK7!oYdNlTgJswF0zHe1BM6Cfn3WpiEXV2rQcGkm5+tySDaP$uObn^IZvY4LMF@Cqx#eWTGzj7A!PUKBRm98NsopJ1l^w3dX$&hEfa2iV6rOc+bCyMkgtHzLn#Qe4RJYP07XS!dWg3kmopbZv@+Fi9UtCLT$#EN8M2Anl5qKhwryexVODGz!J^PIFNcXsTBO9AUWbRM7641g+eKdQym@Ztp3#voLiaYXn2sfH!E5CWG^xjFr9L#0MkTRqwdJ7PbOyUNeX$6ctLgAKhz!vfQmsZ@BVo8n3WD1Cyik7PEJr24#FqxaMG&4h#RUxjb8vZL@A9qK7!oYdNlTgJswF0zHe1BM6Cfn3WpiEXV2rQcGkm5+tySDaP$uObn^IZvY4LMF@Cqx#eWTGzj7A!PUKBRm98NsopJ1l^w3dX$&h", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Address Validation */
        it("passes a valid address", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent address", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects an address too long", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Year Built Validation */
        it("passes a valid year built", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent year built", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects a year before 0", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: -1, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects a year after the current year", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: (new Date().getFullYear()) + 1, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Area Validation */
        it("passes a valid area", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent area", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects an area less than 0", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: -1, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(false)
        })

        /* Test Campus Validation */
        it("passes Allendale as a valid campus", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Allendale" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("passes Pew as a valid campus", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Pew" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("passes Health as a valid campus", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Health" })
            expect(testBuilding.isValid()).toBe(true)
        })

        it("rejects a nonexistent campus", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000 })
            expect(testBuilding.isValid()).toBe(false)
        })

        it("rejects a false campus name", () => {
            let testBuilding = new Building({ name: "Niemeyer", abbreviation: "NHC", description: "Test description!", address: "4045 Calder Dr.", yearBuilt: 2008, area: 180000, campus: "Downtown" })
            expect(testBuilding.isValid()).toBe(false)
        })
    })
})
