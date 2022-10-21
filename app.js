const express = require("express")
const morgan = require("morgan")
const axios = require("axios")

const app = express()
const API_KEY = '3ae708fb6e1048f9a8986bcd033fd6cd'

let port = process.env.PORT || 8080

app.use(express.json())
app.use(morgan('dev'))


app.post("/reverse-coding", (req, res)=> {
    const id = req.params
    //Validation
    const END_POINT = `https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=3ae708fb6e1048f9a8986bcd033fd6cd`
    console.log("END_POINT: " + END_POINT)
    axios.get(END_POINT)

        .then(function(response) {
            console.log("RES: "+ response.data)
  
                    res.json(
                        {
                            ubicación: response.data.results[4],
                        })
        })

        //ERROR HANDLER
        .catch(function (error) {
            console.log("An error has occurred. " + error)
            res.send(error)
            res.status(400)
        })
})

app.listen(port, () => {
    console.log("Server running on port "+ port);
})
