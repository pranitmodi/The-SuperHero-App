const myCode = 1980858332267605
const baseURL = `https://superheroapi.com/api.php/${myCode}`
let id = ""
const name_id = document.getElementById("name")
const gender = document.getElementById("gender")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const eye = document.getElementById("eye_color")
const occu = document.getElementById("occupation")
const app = document.getElementById("appearence")
const publisher = document.getElementById("publisher")
const conn = document.getElementById("connections")

const btn = document.getElementById("random_btn")
const txt = document.getElementById("text_id")
const image1 = document.getElementById("image")

const okay = document.getElementById("idd")

btn.onclick = () =>
{
    id = Math.floor(Math.random() * 731)
    display()
}

display_text = () =>
{
    id = txt.value
    display()
}

display = () =>
{
    const id_main = `${baseURL}/${id}`
    console.log(id_main)
    fetch(id_main).then(response => response.json())
        .then(json =>   
        {
            console.log(json)
            okay.innerText = `#${id}`
            image1.innerHTML = `<img src="${json.image.url}" id="image" alt="">`
            name_id.innerHTML = json.name
            occu.innerText = json.work.occupation
            app.innerHTML = json.biography["first-appearance"]
            publisher.innerHTML = json.biography.publisher
            conn.innerText = json.connections[ "group-affiliation"]
        })
    
    fetch(`${id_main}/appearance`).then(response => response.json())
        .then(json =>   
        {
            console.log(json)
            gender.innerHTML = json.gender
            eye.innerHTML = json["eye-color"]
            height.innerHTML = json.height[0]
            let w = json.weight[1]
            if(w == "0 kg")
                weight.innerHTML = "-"
            else 
                weight.innerHTML = w
        })
}