class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
    	t.float :price
    	t.integer :event_id
    	t.integer :payer_id

      t.timestamps
    end
  end
end
