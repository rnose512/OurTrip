class UserExpense < ApplicationRecord
	validates :user_id, :expense_id, presence: true
end
