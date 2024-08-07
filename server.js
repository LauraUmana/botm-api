const express = require('express')
const app = express()
const PORT = 8000

const botm = {
    'august 2024': {
        'book-one': {
            'title': 'The Wedding People',
            'author': 'Alison Espach'
        },
        'book-two': {
            'title': 'Hera',
            'author': 'Jennifer Saint'
        }, 
        'book=three': {
            'title': 'Like Mother, Like Daughter',
            'author': 'Kimberly McCreight'
        },
        'book-four': {
            'title': 'The Pairing',
            'author': 'Casey McQuiston'
        },
        'book-five': {
            'title': 'Five-Star Stranger',
            'author': 'Kat Tang'
        }
    },
    'july 2024': {
        'book-one': {
            'title': 'The God Of The Woods',
            'author': 'Liz Moore'
        },
        'book-two': {
            'title': 'Husbands & Lovers',
            'author': 'Beartriz Williams'
        },
        'book-three': {
            'title': 'The Lost Story',
            'author': 'Meg Shaffer'
        },
        'book-four': {
            'title': 'A thousand Times Before',
            'author': 'Asha Thanki'
        },
        'book-five': {
            'title': 'House Of Glass',
            'author': 'Sarah Pekkanen'
        }
    },
    'june 2024': {
        'book-one': {
            'title': 'Honey',
            'author': 'Isabel Banta'
        },
        'book-two': {
            'title': 'One-Star Romance',
            'author': 'Laura Hankin'
        },
        'book-three': {
            'title': 'The Lion Women of Tehran',
            'author': 'Marjan Kamali'
        },
        'book-four': {
            'title': 'A talent for Murder',
            'author': 'Peter Swanson'
        },
        'book-five': {
            'title': "Margot's Got Money Troubles",
            'author': 'Rufi Thorpe'
        }
    },
    'unknown': {
        'title': 'unknown',
        'author': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:month', (request, response) => {
   const bookMonth = (request.params.month).toLowerCase()
   if( botm[bookMonth]) {
    response.json(botm[bookMonth])
   } else {
    response.json(botm['unknown'])
   }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}. Betta go catch it!`)
})