# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170911185324) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accomodations", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "phone_number"
    t.float "price"
    t.integer "destination_id"
    t.datetime "check_in"
    t.datetime "check_out"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.string "name"
    t.integer "trip_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.text "description"
    t.string "start_time"
    t.string "end_time"
    t.integer "destination_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "expenses", force: :cascade do |t|
    t.string "name"
    t.float "total_amount"
    t.integer "trip_id"
    t.integer "payer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.integer "quantity"
    t.integer "packing_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "packing_lists", force: :cascade do |t|
    t.string "category"
    t.integer "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transportations", force: :cascade do |t|
    t.string "title"
    t.string "confirmation_number"
    t.string "transportation_type"
    t.integer "destination_id"
    t.integer "user_id"
    t.time "arrival_time"
    t.time "departure_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.date "start_date"
    t.date "end_date"
    t.integer "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_expenses", force: :cascade do |t|
    t.integer "user_id"
    t.integer "expense_id"
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_trips", force: :cascade do |t|
    t.integer "user_id"
    t.integer "trip_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.string "emergency_contact"
    t.string "emergency_contact_phone_number"
    t.string "access_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
