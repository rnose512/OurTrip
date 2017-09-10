class Event < ApplicationRecord
  belongs_to :destination
  has_many :expenses

  validates :title, :category, :start_time, :end_time, :destination_id, presence: true
end
