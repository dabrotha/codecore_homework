# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do |x|
    Post.create({
        title: Faker::Job.title, 
        body: Faker::TheITCrowd.quote*10
    })
  end

#   body: Faker::TheITCrowd.quote.to_s + " | " + Faker::VentureBros.quote.to_s + " | " + 
#   Faker::RickAndMorty.quote.to_s + " | "