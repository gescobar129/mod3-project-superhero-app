class SuperheroSerializer < ActiveModel::Serializer
  attributes :id, :likes, :name, :intelligence, :strength, :speed, :durability, :power, :combat, :full_name, :alter_egos, :aliases, :place_of_birth, :first_appearance, :publisher, :alignment, :gender, :race, :height_feet, :weight_lbs, :eye_color, :hair_color, :occupation, :base, :group_affiliation, :relatives, :image_url, :bio, :universe
end
