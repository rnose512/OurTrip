class UserTrip < ApplicationRecord
  validates :user_id, :trip_id, presence: true
  belongs_to :user
  belongs_to :trip
end
