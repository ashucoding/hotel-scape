# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

hotels = Hotel.create([
    {
        name: "Mnemba Island",
        image_url: "https://images.app.goo.gl/TiQzyV72nsujmLPe8"
    },
    {
        name: "Belmond Hotel Caruso",
        image_url: "https://images.app.goo.gl/wBW83uwVVp8KWG2z5"
    },

    {
        name: "Six Senses Zighy Bay",
        image_url: "https://images.app.goo.gl/gxccG2qf3rcJAWj79"
    },

    {
        name: "Royal Malewane",
        image_url: "https://images.app.goo.gl/rPwwapUxTRAFUxZD6"
    },

    {
        name: "Aman Sveti Stefan",
        image_url: "https://images.app.goo.gl/c6RNnxMw6vmDuxJH8"
    },

    {
        name: "Soneva Fushi",
        image_url: "https://images.app.goo.gl/3UhkrgHahi9iMzu5A"
    },

    {
        name: "Time + Tide Miavana",
        image_url: "https://images.app.goo.gl/nmVM2uiWZ3sonYAM8"
    },

    {
        name: "Soneva Kiri",
        image_url: "https://images.app.goo.gl/HtTYfaHxtfHEfX6a6"
    },

    {
        name: "North Island",
        image_url: "https://images.app.goo.gl/pavNNCHabZcUKb4B8"
    },

    {
        name: "Soneva Jani",
        image_url: "https://images.app.goo.gl/UFeXNbRyawBLpMqj8"
    },
])
reviews = Review.create([
{   title: "The best resort",
    description: "We spent our honeymoon here and loved it, we come back every year",
    score: 5,
    hotel: hotels.first
},

{   title: "Terrible Food",
    description: "The resort was great, but we got food poisioning from the food",
    score: 2,
    hotel: hotels.first
},

])