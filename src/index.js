import Framework7, { Device, Request } from 'framework7'

import Searchbar from 'framework7/components/searchbar/searchbar'
import Calendar from 'framework7/components/calendar/calendar'
import Popup from 'framework7/components/popup/popup'


Framework7.use([Searchbar, Calendar, Popup])

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/about',
            url: 'about.html',
        },
    ],
});

var mainView = app.view.create('.view-main')
