class Expense < ApplicationRecord
  has_many :user_expenses
  has_many :users, through: :user_expenses
  belongs_to :trip
  belongs_to :payer, class_name: "User"

  validates :trip_id, :payer_id, :total_amount, :name, presence: true
end
