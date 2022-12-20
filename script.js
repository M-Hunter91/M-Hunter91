function main() {
    let randomNumber = () => Math.floor(Math.random() * 905)

fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
    .then(response => response.json())
    .then(data => {
        let name = document.getElementById("name");
        nameToUp = data['name']
        if (nameToUp == "-MALE") {
            console.log("remove")
        }
        nameFinal = nameToUp.toUpperCase();  
        name.innerText = nameFinal;
        
        const types = data["types"]
        let type = document.getElementById("type");

        if (types[1] != undefined) {
            type.innerText = `${types[0].type.name} type and ${types[1].type.name} type`
        } else if (types[1] == undefined){
            type.innerText = `${types[0].type.name} type`
        }

        let stats = data["stats"]
        let stats_doc = document.getElementById("stats");
        stats_doc.innerText = `
${stats[0].stat.name}: ${stats[0].base_stat}
${stats[1].stat.name}: ${stats[1].base_stat}
${stats[2].stat.name}: ${stats[2].base_stat}
${stats[3].stat.name}: ${stats[3].base_stat}
${stats[4].stat.name}: ${stats[4].base_stat}
${stats[5].stat.name}: ${stats[5].base_stat}`
        // console.log(data)
        
        let sprite = data["sprites"]
        // console.log(sprite.front_default)
        let img = document.getElementById("sprite")
        img.src = `${sprite.front_default}`
    
        var link = data["species"]
        link = link.url
    
        fetch(link)
        .then(response1 => response1.json())
        .then(data1 => {
            const filter = data1.flavor_text_entries.filter(
                (element) => element.language.name === "en"
            )
            let final = filter[1].flavor_text
            final1 = final.replace(/(\r\n|\n|\r)/gm, " ")
            let pkDex = document.getElementById("pkdexentry");
            // console.log(filter)
            pkDex.innerText = final1
        })
    }
    
    
    
    )
}
window.onload = function() {
    main()
}
document.getElementById("btn").addEventListener("click", function(){main()});