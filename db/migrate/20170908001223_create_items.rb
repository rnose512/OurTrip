class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
    	t.string :title
    	t.integer :quantity
    	t.integer :packing_list_id

      t.timestamps
    end
  end
end
