# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Survivor.destroy_all
Tools.destroy_all
Shelter.destroy_all

t1 = Tool.create(name: "Machete", rating: 8, image: "")
t2 = Tool.create(name: "Duct Tape", rating: 6, image: "")
t3 = Tool.create(name: "Toilet Paper", rating: 4, image: "")
t4 = Tool.create(name: "Fire Starter", rating: 7, image: "")
t5 = Tool.create(name: "Hand Sanitizer", rating: 5, image: "")
t6 = Tool.create(name: "Hatchet", rating: 6, image: "")

s1 = Shelter.create(name: "Tarp", rating: 6, image: "")
s2 = Shelter.create(name: "Debris", rating: 5, image: "")
s1 = Shelter.create(name: "Quarantine House", rating: 7, image: "")
s1 = Shelter.create(name: "Cave", rating: 8, image: "")
s1 = Shelter.create(name: "Igloo", rating: 8, image: "")
s1 = Shelter.create(name: "Tree", rating: 4, image: "")

