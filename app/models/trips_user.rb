class TripsUser < ApplicationRecord
	validates :user_id, :trip_id, presence: true
end
