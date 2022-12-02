# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Recipient.create(
    name: "Organization",
    category: "Poverty",
    fundraising_goal: 100,
    logo: "https://www.shutterstock.com/image-vector/homeless-shelter-vector-color-logo-260nw-1066474799.jpg",
    description: "Helps poverty")

Recipient.create(
    name: "Scholarship America",
    category: 'Education',
    fundraising_goal: 1000000,
    logo: "https://static.vecteezy.com/system/resources/thumbnails/007/688/840/small/education-logo-free-vector.jpg",
    description: "Scholarship America works directly with students, parents, colleges, businesses and communities to help students fulfill their college dreams.")
    
Recipient.create(
    name: "Hospital",
    category: "Health",
    fundraising_goal: 5000,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47NCkHLoIpAD3nu5I_RgmtblaQrXtGrDTt-DqNxWQ&s",
    description: "Helps the sick")
