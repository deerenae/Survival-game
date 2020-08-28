# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_23_163629) do

  create_table "shelters", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "survivors", force: :cascade do |t|
    t.integer "tool_id", null: false
    t.integer "shelter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shelter_id"], name: "index_survivors_on_shelter_id"
    t.index ["tool_id"], name: "index_survivors_on_tool_id"
  end

  create_table "tools", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "survivors", "shelters"
  add_foreign_key "survivors", "tools"
end
