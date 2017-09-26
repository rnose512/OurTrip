class CreatePackingLists < ActiveRecord::Migration[5.1]
  def change
    create_table :packing_lists do |t|
    	t.string :category
    	t.integer :trip_id

      t.timestamps
    end
  end
end
