// 1. Provide a class for local-dependent display a paper sizes, using the preferred dimensional unit and default paper size in the given locale.
// - Everyone on the planet, with the exception of the United States in Canada uses ISO 216 paper sizes. 
// - Only three countries in the world have not yet officially adopted metric system Liberia Myanmar and the United States.


class LocalePaper{
    #ISO216 = {
        A0: {
            "Imperial": "33.1 x 46.8",
            "Metric": "841mm x 1:189mm",
        },
        A1: {
            "Imperial": "23.4 x 33.1",
            "Metric": "594mm x 841mm",
        },
        A2: {
            "Imperial": "16.5 x 23.4",
            "Metric": "42r0mm x 594mm",
        },
        A3: {
            "Imperial": "11.7 x 16.5",
            "Metric": "297mm x 420mm",
        },
        A4: {
            "Imperial": "8.3 x 11.7",
            "Metric": "210mm x 297mm",
        },
        A5: {
            "Imperial": "5.8 x 8.3",
            "Metric": "148mm x 210mm",
        },
        A6: {
            "Imperial": "4.1 x 5.8",
            "Metric": "105mm x 148mm",
        },
        A7: {
            "Imperial": "2.9 x 4.1",
            "Metric": "74mm x 105mm",
        },
        A8: {
            "Imperial": "2.0 x 2.9",
            "Metric": "52mm x 74mm",
        },
        A9: {
            "Imperial": "1.5 x 2.0",
            "Metric": "37mm x 52mm",
        },
        A10: {
            "Imperial": "1.0 x 1.5",
            "Metric": "26mm x 37mm"
        },
    }

    #ANSI = {
        "Half Letter": {
            "Imperial": "5.5 x 8.5 in", 
            "Metric" : "140 x 216 mm"
        },
        "Government Letter": {
            "Imperial": "8.0 x 10.0 in", 
            "Metric" : "203 x 254 mm"
        },
        "Letter": {
            "Imperial": "8.5 x 11.0 in", 
            "Metric" : "216 x 279 mm"
        },
        "Junior Legal": {
            "Imperial": "5.0 x 8.0 in", 
            "Metric" : "127 x 203 mm"
        },
        "Government Legal": {
            "Imperial": "8.5 x 13.0 in", 
            "Metric" : "216 x 330 mm"
        },
        "Legal": {
            "Imperial": "8.5 x 14.0 in", 
            "Metric" : "216 x 356 mm"
        },
        "Ledger / Tabloid": {
            "Imperial": "11.0 x 17.0 in", 
            "Metric" : "279 x 432 mm"
        }
    }
    constructor(tag = String){
        this.paper_sizes = this.#ISO216
        this.unit_system = "Metric"
        if (tag === 'us' || tag === 'ca'){
            this.paper_sizes = this.#ANSI
        }
        if (tag === 'us' || tag === "lr" || tag === "mm"){
            this.unit_system = "Imperial"
        }
    }

    getPaperSizes(paper_size){
        return this.paper_sizes[paper_size][this.unit_system]
    }
}


const localePaper = new LocalePaper('us')
console.log(localePaper.getPaperSizes("Letter"))
