class CreateAccomodations < ActiveRecord::Migration[5.1]
  def change
    create_table :accomodations do |t|
    	t.string :name
    	t.string :address
    	t.string :phone_number
    	t.float :price
    	t.integer :destination_id
    	t.datetime :check_in
    	t.datetime :check_out

      t.timestamps
    end
  end
end
