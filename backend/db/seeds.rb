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
  puts superhero
end
