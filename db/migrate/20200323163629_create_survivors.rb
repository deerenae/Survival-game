class CreateSurvivors < ActiveRecord::Migration[6.0]
  def change
    create_table :survivors do |t|
      t.references :tool, null: false, foreign_key: true
      t.references :shelter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
