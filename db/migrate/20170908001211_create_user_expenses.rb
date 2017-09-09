class CreateUserExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_expenses do |t|

      t.timestamps
    end
  end
end
