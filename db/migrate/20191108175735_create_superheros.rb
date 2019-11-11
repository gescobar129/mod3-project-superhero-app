class CreateSuperheros < ActiveRecord::Migration[6.0]
  def change
    create_table :superheros do |t|
      t.string :name
      t.integer :intelligence
      t.integer :strength
      t.integer :speed
      t.integer :durability
      t.integer :power
      t.integer :combat
      t.string :full_name
      t.string :alter_egos
      t.string :aliases
      t.string :place_of_birth
      t.string :first_appearance
      t.string :publisher
      t.string :alignment
      t.string :gender
      t.string :race
      t.string :height_feet
      t.string :height_meters
      t.string :weight_lbs
      t.string :weight_kgs
      t.string :eye_color
      t.string :hair_color
      t.string :occupation
      t.string :base
      t.string :group_affiliation
      t.string :relatives
      t.string :image_url
    end
  end
end
