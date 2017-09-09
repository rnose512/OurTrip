class Expense < ApplicationRecord
  has_many :expense_users
  belongs_to :event
  belongs_to :payer

  validates :price, :event_id, :payer_id, presence: true
end
