class CreateUserExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_expenses do |t|
    	t.integer :user_id
    	t.integer :expense_id
      t.float :amount

      t.timestamps
    end
  end
end
