class UserExpense < ApplicationRecord
	validates :user_id, :expense_id, :amount, presence: true
  belongs_to :user
  belongs_to :expense
end
