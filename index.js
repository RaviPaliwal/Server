const connect = require('./mainDB')
const express = require('express')
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');
connect();
const port = 5000
const app = express()


//Routes
//to use req body we need this middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());


//This is Exposed Folder For Frontend\
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Exposed Folders
app.use('/images',express.static('./Uploads/Images/'))
app.use('/images',express.static('./Uploads/Carousel/'))
app.use('/images',express.static('./Uploads/FacultyImages/'))
app.use('/pdfs',express.static('./Uploads/PDFs/'))
app.use('/images',express.static('./Uploads/NewsImages/'))

app.use('/api/images', require('./Routes/images_route'))
app.use('/api/announcement',require('./Routes/announcement_route'))
app.use('/auth',require('./Routes/auth_route'))
app.use('/api/carousel', require('./Routes/carousel_route'))
app.use('/api/faculty', require('./Routes/faculty_route'))
app.use('/api/contactus', require('./Routes/contactroute'))
app.use('/api/pdf', require('./Routes/pdfroute'))
app.use('/api', require('./Routes/industrycolab'))
app.use('/api/news', require('./Routes/newsroute'))

// if You need to access the all backend routes saperately from brouser or any other app
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// Remove the code from above


  app.listen(port, () => {
    console.log(`Data Base is On Port ${port}`)
  })

