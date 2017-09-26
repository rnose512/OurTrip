class CreateDestinations < ActiveRecord::Migration[5.1]
  def change
    create_table :destinations do |t|
    	t.string :name
    	t.integer :trip_id
    	t.datetime :start_date
    	t.datetime :end_date

      t.timestamps
    end
  end
end
