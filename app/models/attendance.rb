class Attendance < ApplicationRecord
	validates :user_id, :trip_id, presence: true
end
