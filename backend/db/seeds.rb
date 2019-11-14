# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Deleting existing data..."
Superhero.destroy_all

puts 'Fetching superhero data...'
(1..731).to_a.each do |superhero_id|
  request_url = "https://www.superheroapi.com/api.php/10220107637702540/#{superhero_id}"
  request = RestClient::Request.execute(
    method: :get,
    url: request_url)
    # headers: {params: {APPID: ENV['APPID']}})
  superhero = JSON.parse(request)
  Superhero.create(
    name: superhero['name'],
    intelligence: superhero['powerstats']['intelligence'],
    strength: superhero['powerstats']['strength'],
    speed: superhero['powerstats']['speed'],
    durability: superhero['powerstats']['durability'],
    power: superhero['powerstats']['power'],
    combat: superhero['powerstats']['combat'],
    full_name: superhero['biography']['full-name'],
    alter_egos: superhero['biography']['alter-egos'],
    aliases: superhero['biography']['aliases'][0],
    place_of_birth: superhero['biography']['place-of-birth'],
    first_appearance: superhero['biography']['first-appearance'],
    publisher: superhero['biography']['publisher'],
    alignment: superhero['biography']['alignment'],
    gender: superhero['appearance']['gender'],
    race: superhero['appearance']['race'],
    height_feet: superhero['appearance']['height'][0],
    height_meters: superhero['appearance']['height'][1],
    weight_lbs: superhero['appearance']['weight'][0],
    weight_kgs: superhero['appearance']['weight'][1],
    eye_color: superhero['appearance']['eye-color'],
    hair_color: superhero['appearance']['hair-color'],
    occupation: superhero['work']['occupation'],
    base: superhero['work']['base'],
    group_affiliation: superhero['connections']['group-affiliation'],
    relatives: superhero['connections']['relatives'],
    image_url: superhero['image']['url']
  )
  puts superhero_id
end


(1..731).to_a.each do |superhero_id|
  Like.create(superhero_id: superhero_id)
end


puts 'DB seeded!'
