class Expense < ApplicationRecord
  has_many :user_expenses
  has_many :users, through: :user_expenses
  belongs_to :event
  belongs_to :payer, class_name: "User"

  validates :price, :event_id, :payer_id, :total_amount, presence: true
end
