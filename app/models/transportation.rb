class Transportation < ApplicationRecord
  belongs_to :destination
  belongs_to :user

  validates :title, :transportation_type, :destination_id, :user_id, :arrival_time, :departure_time, presence: true
end
