/*
    * DEFINE 
*/    
const express = require('express')
const app = express()
//app.use(express.static('public'))
/* 
    * //virtual path setting
    * http://localhost:3000/static/js/... you can set this path by this
*/
//use absolute path
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//'view engine' use the template 'ejs'
//after this statement, the '.ejs' is omitted
/* 
    * THE 'EJS' programer
    * <% 'Scriptlet' tag, for control-flow, no output

    * <%= Outputs the value into the template (HTML escaped)

    * <%- Outputs the unescaped value into the template
* 
*/
app.set('view engine', 'ejs')
//template 'ejs' is in that path
app.set('views', path.join(__dirname, 'views'))

const port = 3000


/*
    * GET METHOD 
*/    
app.get('/', (req, res) => {
    //res.send('This page root page on port 3000')
    res.render('index', {name:'uki', message: 'Hello'})
})
/*
    * POST METHOD
*/
app.post('/views', (req, res)=>{
    res.send('Got a POST request')
})

/*
    * Server log 
*/    
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
