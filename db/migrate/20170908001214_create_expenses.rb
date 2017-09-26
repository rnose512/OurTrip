class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :name
    	t.float :total_amount
    	t.integer :trip_id
    	t.integer :payer_id

      t.timestamps
    end
  end
end
