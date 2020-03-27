# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Survivor.destroy_all
Tool.destroy_all
Shelter.destroy_all

t1 = Tool.create(name: "Machete", rating: 8, image: "https://hosstools.com/wp-content/uploads/farm-machete-1.jpg")
t2 = Tool.create(name: "Duct Tape", rating: 6, image: "https://assets.leevalley.com/Size4/10019/25U0660-duct-tape-180-f-11.jpg")
t3 = Tool.create(name: "Toilet Paper", rating: 4, image: "https://www.dw.com/image/43250575_401.jpg")
t4 = Tool.create(name: "Fire Starter", rating: 7, image: "https://shop.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/6/66560_W3.jpg")
t5 = Tool.create(name: "Hand Sanitizer", rating: 7, image: "https://images.uline.com/is/image//content/dam/images/S/S20500/S-20117.jpg?$Mobile_SI$&iccEmbed=1&icc=AdobeRGB")
t6 = Tool.create(name: "Hatchet", rating: 6, image: "http://counciltool.com/wp-content/uploads/2017/07/JP125HB14C-1-1500x1436.jpg")

s1 = Shelter.create(name: "Tarp", rating: 6, image: "https://external-preview.redd.it/wU8eRnMGxCwCY84AXdidTORct4CnWcpps5kvVMj6qxc.jpg?auto=webp&s=48756d626bb8feabe1f2233b56beebf2e51fa4be")
s2 = Shelter.create(name: "Debris", rating: 5, image: "https://20401z3eigij1ugd3g2szg83-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/debris-hut-wikispacesDOTcom.jpg")
s3 = Shelter.create(name: "Quarantine House", rating: 7, image: "https://i.guim.co.uk/img/media/e03ade5f1a1f7ed8966d18f0ae8e0d2be9ca97e6/0_0_5315_3191/master/5315.jpg?width=1920&quality=85&auto=format&fit=max&s=0e30b8c58e10333b7b7ad7a72363403c")
s4 = Shelter.create(name: "Cave", rating: 8, image: "http://nebula.wsimg.com/570f41e6a7f4ffc297640e1fb4449a80?AccessKeyId=1D367233EC437D722752&disposition=0&alloworigin=1")
s5 = Shelter.create(name: "Igloo", rating: 6, image: "https://nativeamericansofthearctic.weebly.com/uploads/4/2/6/6/42667725/2664211.jpg?492")
s6 = Shelter.create(name: "Tree", rating: 4, image: "https://mysurvivalforum.com/attachments/1339999435671-jpg.328/")

