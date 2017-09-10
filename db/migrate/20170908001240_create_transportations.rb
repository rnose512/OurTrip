class CreateTransportations < ActiveRecord::Migration[5.1]
  def change
    create_table :transportations do |t|
    	t.string :title
    	t.string :confirmation_number
    	t.string :transportation_type
    	t.integer :destination_id
    	t.integer :user_id
    	t.time :arrival_time
    	t.time :departure_time

      t.timestamps
    end
  end
end
