class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
    	t.string :name
    	t.date :start_date
    	t.date :end_date
    	t.integer :creator_id

      t.timestamps
    end
  end
end
