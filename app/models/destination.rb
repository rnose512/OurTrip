class Destination < ApplicationRecord
  has_many :events
  has_many :accomodations
  has_many :expenses

  belongs_to :trip

  validates :name, :trip_id, :start_date, :end_date, presence: true
end
