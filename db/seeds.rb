# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Recipient.create(
    name: "Help the Homeless",
    category: "Poverty",
    fundraising_goal: 9999,
    logo: "https://www.careforthehomeless.org/wp-content/uploads/2019/05/logo.png",
    description: "Helps poverty stricken individuals with basic necessities.")

Recipient.create(
    name: "Scholarship America",
    category: 'Education',
    fundraising_goal: 1000000,
    logo: "https://static.vecteezy.com/system/resources/thumbnails/007/688/840/small/education-logo-free-vector.jpg",
    description: "Scholarship America works directly with students, parents, colleges, businesses and communities to help students fulfill their college dreams.")
    
Recipient.create(
    name: "Mount Sinai Hospital",
    category: "Health",
    fundraising_goal: 50000,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47NCkHLoIpAD3nu5I_RgmtblaQrXtGrDTt-DqNxWQ&s",
    description: "Treating ill patients with compassion and dignity.")


