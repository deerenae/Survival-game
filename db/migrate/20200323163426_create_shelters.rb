class CreateShelters < ActiveRecord::Migration[6.0]
  def change
    create_table :shelters do |t|
      t.string :name
      t.integer :rating
      t.string :image

      t.timestamps
    end
  end
end
