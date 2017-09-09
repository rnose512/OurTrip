class CreateTransportations < ActiveRecord::Migration[5.1]
  def change
    create_table :transportations do |t|
    	t.string :title
    	t.string :confirmation_number
    	t.string :type
    	t.integer :destination_id
    	t.integer :user_id
    	t.time :arrival_time
    	t.time :departure_time

      t.timestamps
    end
  end
end
