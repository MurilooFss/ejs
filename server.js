const express = require('express')
const app = express()
const items =[
    {title:'N',
    message: 'ode'        
    },
    {title:'O',
    message: 'brigatório'        
    },
    {title:'D',
    message: 'e'        
    },
    {title:'E',
    message: 'studar'        
    }
]

app.set("view engine", "ejs")
app.get("/", function(req, res){
    res.render('pages/index', {
        qualitys: items
    })
})
app.get("/about", function(req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log('server')