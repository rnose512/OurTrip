class UserExpense < ApplicationRecord
	validates :user_id, :expense_id, :amount, presence: true
end
